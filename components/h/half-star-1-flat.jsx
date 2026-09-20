import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxo58abkx.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="mxo58abkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:half-star-1-flat"} {...others} />);
}

export default Component;
