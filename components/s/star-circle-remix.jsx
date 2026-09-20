import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1smw0s4z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a1smw0s4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:star-circle-remix"} {...others} />);
}

export default Component;
