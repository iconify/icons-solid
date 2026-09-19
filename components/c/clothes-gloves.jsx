import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hugpebu3y.css';
import '../../css/k/kaaxdohqm.css';
import '../../css/p/p9_dh8t7k.css';
import '../../css/f/fc9fwmbjf.css';
import '../../css/d/d78dj_qbj.css';
import '../../css/a/aga0d7bnr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="hugpebu3y"/><path class="kaaxdohqm"/><path class="p9_dh8t7k"/><path class="fc9fwmbjf"/><path class="d78dj_qbj"/><path class="aga0d7bnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clothes-gloves"} {...others} />);
}

export default Component;
