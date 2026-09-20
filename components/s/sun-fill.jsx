import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zn54-c3sn.css';
import '../../css/o/oj20f_vvr.css';
import '../../css/d/dwrt84m-r.css';
import '../../css/a/ajohu1zpd.css';
import '../../css/t/tpa894-wt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zn54-c3sn"/><path class="oj20f_vvr"/><path class="dwrt84m-r"/><path class="ajohu1zpd"/><path class="tpa894-wt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sun-fill"} {...others} />);
}

export default Component;
