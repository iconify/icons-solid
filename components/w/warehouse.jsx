import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hoxl10dzr.css';
import '../../css/f/f9zmkacim.css';
import '../../css/z/zmlh3bbcb.css';
import '../../css/i/io385cbch.css';
import '../../css/n/n8hqhjbho.css';
import '../../css/m/ml-aepb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hoxl10dzr wm-shadow"/><path class="f9zmkacim"/><path class="zmlh3bbcb"/><path class="io385cbch"/><path class="n8hqhjbho"/><path class="ml-aepb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:warehouse"} {...others} />);
}

export default Component;
