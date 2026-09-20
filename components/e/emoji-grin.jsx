import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qh4l7r3-i.css';
import '../../css/k/kne5kebtp.css';
import '../../css/p/p9kwgybhy.css';
import '../../css/o/ox5n37b4e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="qh4l7r3-i"/><circle class="kne5kebtp"/><circle class="p9kwgybhy"/><path class="ox5n37b4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:emoji-grin"} {...others} />);
}

export default Component;
