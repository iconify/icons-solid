import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w01dflzvf.css';
import '../../css/g/go95lyb-o.css';
import '../../css/d/dsc4racke.css';
import '../../css/q/qdq7cabwt.css';
import '../../css/l/leh-9ubya.css';
import '../../css/z/zmd7ce43y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w01dflzvf"/><path class="go95lyb-o"/><path class="dsc4racke"/><path class="qdq7cabwt"/><path class="leh-9ubya"/><path class="zmd7ce43y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-box-plot-20-bold"} {...others} />);
}

export default Component;
