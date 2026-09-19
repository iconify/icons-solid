import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/i3e6hgbwp.css';
import '../../css/p/p1izkfbzs.css';
import '../../css/v/v1r7_u2fb.css';
import '../../css/o/o3-oz1ymj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="i3e6hgbwp"/><path class="p1izkfbzs"/><path class="v1r7_u2fb"/><path class="o3-oz1ymj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bless"} {...others} />);
}

export default Component;
