import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mv29y0z8r.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="mv29y0z8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:eyedropper"} {...others} />);
}

export default Component;
