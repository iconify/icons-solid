import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t7oqcdc7h.css';
import '../../css/p/pzhyqnvll.css';
import '../../css/u/ucbq0fb6x.css';
import '../../css/x/x8l1_cc-j.css';
import '../../css/j/jhh77n9wj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t7oqcdc7h"/><path class="pzhyqnvll"/><path class="ucbq0fb6x"/><path class="x8l1_cc-j"/><path class="jhh77n9wj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:gas-station"} {...others} />);
}

export default Component;
