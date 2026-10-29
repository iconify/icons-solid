import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kxy358b-l.css';
import '../../css/k/kfvqsfbkz.css';
import '../../css/b/baylgehlv.css';
import '../../css/u/uc2l5qcjv.css';
import '../../css/w/wfq8uz8wa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kxy358b-l"/><path class="kfvqsfbkz"/><path class="baylgehlv wm-a"/><path class="uc2l5qcjv wm-a"/><path class="wfq8uz8wa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-older-woman"} {...others} />);
}

export default Component;
