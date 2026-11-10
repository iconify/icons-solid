import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3nny7b_l.css';
import '../../css/l/lqm6bibtw.css';
import '../../css/y/yzr1cbbbc.css';
import '../../css/r/rsjhhrp7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="e3nny7b_l"/><path class="lqm6bibtw"/><path class="yzr1cbbbc"/><path class="rsjhhrp7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:globe-off"} {...others} />);
}

export default Component;
