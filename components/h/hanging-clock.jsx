import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kaexh7bpa.css';
import '../../css/q/qppt3ts9n.css';
import '../../css/w/w-rfhehyc.css';
import '../../css/l/lq1b7q0fi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="kaexh7bpa"/><circle class="qppt3ts9n"/><path class="w-rfhehyc"/><path class="lq1b7q0fi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hanging-clock"} {...others} />);
}

export default Component;
