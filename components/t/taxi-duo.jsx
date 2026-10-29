import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i_3xyqbso.css';
import '../../css/h/hfo3qmbvt.css';
import '../../css/u/uysll01ef.css';
import '../../css/g/gsm21sbrt.css';
import '../../css/q/q1vr80fzk.css';
import '../../css/n/nb-vlvbbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="i_3xyqbso"/><path class="hfo3qmbvt wm-a"/><path class="uysll01ef"/><path class="gsm21sbrt wm-a"/><path class="q1vr80fzk"/><path class="nb-vlvbbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:taxi-duo"} {...others} />);
}

export default Component;
