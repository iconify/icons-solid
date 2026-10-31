import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d60cvwwni.css';
import '../../css/s/s0gi_fbkr.css';
import '../../css/z/zw25_fouw.css';
import '../../css/n/nu58gbc_b.css';
import '../../css/i/ik5228bhp.css';
import '../../css/a/anvp7wbci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="d60cvwwni wm-shadow"/><path class="s0gi_fbkr"/><path class="zw25_fouw"/><path class="nu58gbc_b"/><path class="ik5228bhp"/><path class="anvp7wbci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:panel-right-close"} {...others} />);
}

export default Component;
