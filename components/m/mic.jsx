import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yz0l1ghtu.css';
import '../../css/m/m-85aw1xu.css';
import '../../css/c/cytx0q19y.css';
import '../../css/k/k4xij9_1f.css';
import '../../css/l/l61z4uyyw.css';
import '../../css/a/ay-p57qmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="yz0l1ghtu"/><path class="m-85aw1xu"/><path class="cytx0q19y"/><path class="k4xij9_1f"/><path class="l61z4uyyw"/><path class="ay-p57qmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:mic"} {...others} />);
}

export default Component;
