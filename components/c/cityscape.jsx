import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jhbsq7b7j.css';
import '../../css/h/hst0debeo.css';
import '../../css/y/ymtzt-agv.css';
import '../../css/z/zt8luhagv.css';
import '../../css/n/n2lcrpbli.css';
import '../../css/i/i3cr3vbqz.css';
import '../../css/r/r2-si39jq.css';
import '../../css/j/j6f-i1bcd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jhbsq7b7j"/><path class="hst0debeo"/><path class="ymtzt-agv"/><path class="zt8luhagv"/><path class="n2lcrpbli"/><path class="i3cr3vbqz"/><path class="r2-si39jq"/><path class="j6f-i1bcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:cityscape"} {...others} />);
}

export default Component;
