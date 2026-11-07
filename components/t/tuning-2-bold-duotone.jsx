import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m03pku77p.css';
import '../../css/q/q7wq8kbpw.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/rmfkw9bns.css';
import '../../css/b/bh4awnbzk.css';
import '../../css/r/ro_trobcb.css';
import '../../css/i/ikzl0k6ol.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m03pku77p"/><path class="q7wq8kbpw"/><g class="xtpeb-edw"><path class="rmfkw9bns"/><path class="bh4awnbzk"/><path class="ro_trobcb"/><path class="ikzl0k6ol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-2-bold-duotone"} {...others} />);
}

export default Component;
