import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fi9apub5e.css';
import '../../css/a/aeipm-beo.css';
import '../../css/f/fh6r28bvx.css';
import '../../css/y/ymsz6-b_e.css';
import '../../css/s/s4ufcpb5d.css';
import '../../css/a/ahdlxccgr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fi9apub5e wm-shadow"/><path class="aeipm-beo"/><path class="fh6r28bvx"/><path class="ymsz6-b_e"/><path class="s4ufcpb5d"/><path class="ahdlxccgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:gingerbread-man"} {...others} />);
}

export default Component;
