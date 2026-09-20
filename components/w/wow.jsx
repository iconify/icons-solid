import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abe4_nbce.css';
import '../../css/m/md_wqtycd.css';
import '../../css/y/yfs0kqb-c.css';
import '../../css/w/w6-q7vl-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="abe4_nbce"/><circle class="md_wqtycd"/><circle class="yfs0kqb-c"/><path class="w6-q7vl-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:wow"} {...others} />);
}

export default Component;
