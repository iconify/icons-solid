import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycqe6sbbp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e-ab50cow.css';
import '../../css/q/q6a7scmtz.css';
import '../../css/k/kxv6pebud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary ycqe6sbbp"/><g class="dt0cm9dhy primary"><path class="e-ab50cow"/><path class="q6a7scmtz"/><path class="kxv6pebud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:text-to-speech-duo"} {...others} />);
}

export default Component;
