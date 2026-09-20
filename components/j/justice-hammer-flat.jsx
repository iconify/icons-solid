import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/txu7yvw_q.css';
import '../../css/u/uzvoekb-y.css';
import '../../css/r/rr32o8s1b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="txu7yvw_q"/><path clip-rule="evenodd" class="uzvoekb-y"/><path class="rr32o8s1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:justice-hammer-flat"} {...others} />);
}

export default Component;
