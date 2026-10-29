import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aiz3dcjyo.css';
import '../../css/c/c-wcphrmv.css';
import '../../css/q/qmnox1bpl.css';
import '../../css/z/z-xy10bpg.css';
import '../../css/v/v1r6jvbof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="aiz3dcjyo"/><path class="c-wcphrmv wm-shadow"/><path class="qmnox1bpl"/><path class="z-xy10bpg"/><path class="v1r6jvbof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:laddoo-engrave"} {...others} />);
}

export default Component;
