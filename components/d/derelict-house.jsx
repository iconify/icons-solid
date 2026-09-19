import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m5zvr65ac.css';
import '../../css/b/beg8en7ps.css';
import '../../css/b/b4cbrjb-x.css';
import '../../css/m/m5y224bqm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="m5zvr65ac"/><path class="beg8en7ps"/><path class="b4cbrjb-x"/><path class="m5y224bqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:derelict-house"} {...others} />);
}

export default Component;
