import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wt-a7wbqk.css';
import '../../css/o/o85o14brb.css';
import '../../css/n/n4rvk3jeo.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="wt-a7wbqk"/><path class="o85o14brb"/><path class="n4rvk3jeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:bg"} {...others} />);
}

export default Component;
