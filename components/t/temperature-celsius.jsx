import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rjmd6lg4e.css';
import '../../css/q/qbi4bdc_j.css';
import '../../css/e/eciyvwb0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rjmd6lg4e"/><path class="qbi4bdc_j"/><path class="eciyvwb0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:temperature-celsius"} {...others} />);
}

export default Component;
