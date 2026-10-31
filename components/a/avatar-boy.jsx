import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/trk_vos1a.css';
import '../../css/r/rzyh7kbir.css';
import '../../css/g/gmvostbky.css';
import '../../css/b/bk7vq0byn.css';
import '../../css/s/st48pubqu.css';
import '../../css/j/jm-tzwbtj.css';
import '../../css/x/xkazz8bci.css';
import '../../css/y/y1lx_wbil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="trk_vos1a wm-shadow"/><path class="rzyh7kbir"/><path class="gmvostbky"/><path class="bk7vq0byn"/><path class="st48pubqu"/><path class="jm-tzwbtj"/><path class="xkazz8bci"/><path class="y1lx_wbil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-boy"} {...others} />);
}

export default Component;
