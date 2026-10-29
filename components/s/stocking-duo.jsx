import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zzgndnbwj.css';
import '../../css/s/s0u551bts.css';
import '../../css/s/shvumy_dn.css';
import '../../css/o/o25cc4zjh.css';
import '../../css/m/msfvzeb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zzgndnbwj"/><path class="s0u551bts wm-a"/><path class="shvumy_dn wm-a"/><path class="o25cc4zjh"/><path class="msfvzeb4q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stocking-duo"} {...others} />);
}

export default Component;
