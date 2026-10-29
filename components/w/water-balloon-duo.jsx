import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i-4h2ab-f.css';
import '../../css/k/kfb2hf1uo.css';
import '../../css/p/pfunrccay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="i-4h2ab-f"/><path class="kfb2hf1uo wm-a"/><path class="pfunrccay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:water-balloon-duo"} {...others} />);
}

export default Component;
