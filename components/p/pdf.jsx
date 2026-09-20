import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bivlboz0v.css';
import '../../css/b/bmnyigpxp.css';
import '../../css/f/fml_j_bwp.css';
import '../../css/k/k4s0kzbio.css';

const viewBox = {"width":75.32,"height":92.604};
const content = `<path paint-order="markers fill stroke" class="bivlboz0v"/><path paint-order="markers fill stroke" class="bmnyigpxp"/><path class="fml_j_bwp"/><path class="k4s0kzbio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pdf"} {...others} />);
}

export default Component;
