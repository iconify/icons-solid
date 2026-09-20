import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v473bfbma.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v473bfbma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:phone-pen-2-remix"} {...others} />);
}

export default Component;
