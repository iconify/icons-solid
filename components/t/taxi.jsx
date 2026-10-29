import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q1vr80fzk.css';
import '../../css/g/gsm21sbrt.css';
import '../../css/n/nb-vlvbbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="q1vr80fzk"/><path class="gsm21sbrt wm-a"/><path class="nb-vlvbbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:taxi"} {...others} />);
}

export default Component;
