import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9d05fmzy.css';
import '../../css/t/tqemlwa1m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="y9d05fmzy"/><path class="tqemlwa1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:upload-circle-flat"} {...others} />);
}

export default Component;
