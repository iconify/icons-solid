import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-rkljbsp.css';
import '../../css/f/fqrq_xtfe.css';
import '../../css/a/aq5gtksql.css';
import '../../css/d/dlcrhbbld.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l-rkljbsp"/><path class="fqrq_xtfe"/><path class="aq5gtksql"/><path class="dlcrhbbld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-alt-big-duotone"} {...others} />);
}

export default Component;
