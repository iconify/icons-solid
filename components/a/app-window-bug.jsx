import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jldpwfb-s.css';
import '../../css/l/l30-5vb5s.css';
import '../../css/x/x3pawtpgt.css';
import '../../css/q/qb-6xq-px.css';
import '../../css/y/y6q5ercew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jldpwfb-s"/><path class="l30-5vb5s"/><path class="x3pawtpgt"/><path class="qb-6xq-px"/><path class="y6q5ercew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:app-window-bug"} {...others} />);
}

export default Component;
