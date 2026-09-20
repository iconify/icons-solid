import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly4d_7b5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ly4d_7b5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:pin-1-remix"} {...others} />);
}

export default Component;
