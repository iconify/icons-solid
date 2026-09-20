import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0eb8ocet.css';
import '../../css/j/jqr4jlrts.css';
import '../../css/s/saylzqw1v.css';
import '../../css/y/yp_ln5bsv.css';
import '../../css/o/o6mijlayn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d0eb8ocet"/><rect class="jqr4jlrts"/><path class="saylzqw1v"/><path class="yp_ln5bsv"/><path class="o6mijlayn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:print-duotone-line"} {...others} />);
}

export default Component;
