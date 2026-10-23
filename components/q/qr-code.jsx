import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/d/d8vkrvboc.css';
import '../../css/g/g62c_b0ym.css';
import '../../css/c/coa5w3v0h.css';
import '../../css/u/uh0qp9b6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="d8vkrvboc"/><path class="g62c_b0ym"/><path class="coa5w3v0h"/><path class="uh0qp9b6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:qr-code"} {...others} />);
}

export default Component;
