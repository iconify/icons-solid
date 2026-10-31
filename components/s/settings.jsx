import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rogbht3un.css';
import '../../css/w/wleaz6lpt.css';
import '../../css/y/yymf0qlbr.css';
import '../../css/m/m05wcsb4j.css';
import '../../css/f/fwtb79bbf.css';
import '../../css/z/zst73pb9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rogbht3un wm-shadow"/><path class="wleaz6lpt"/><path class="yymf0qlbr"/><path class="m05wcsb4j"/><path class="fwtb79bbf"/><path class="zst73pb9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:settings"} {...others} />);
}

export default Component;
