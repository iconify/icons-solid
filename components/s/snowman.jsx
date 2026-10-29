import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d0dcmrbxa.css';
import '../../css/h/h2v4rg05k.css';
import '../../css/i/i6138id3q.css';
import '../../css/y/yrjl_cbrj.css';
import '../../css/x/xhfwlqbxc.css';
import '../../css/a/am9h9cbcf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="d0dcmrbxa"/><path class="h2v4rg05k wm-a"/><path class="i6138id3q wm-a"/><path class="wm-a yrjl_cbrj"/><path class="wm-s xhfwlqbxc"/><path class="am9h9cbcf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:snowman"} {...others} />);
}

export default Component;
