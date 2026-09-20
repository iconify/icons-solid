import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ycdm_whpo.css';
import '../../css/u/u301mpbgd.css';
import '../../css/m/m0ghumb1p.css';
import '../../css/c/cqy3qlb9c.css';
import '../../css/j/jgy70jjtc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ycdm_whpo"/><path class="u301mpbgd"/><path class="m0ghumb1p"/><path class="cqy3qlb9c"/><path class="jgy70jjtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-email-generator-spark"} {...others} />);
}

export default Component;
