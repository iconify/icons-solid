import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-5recc8q.css';
import '../../css/i/i7-pdt9kj.css';
import '../../css/i/i9ivp18un.css';
import '../../css/s/s-cle7bfv.css';
import '../../css/q/qzmw8qbfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f-5recc8q wm-k"/><path class="i7-pdt9kj wm-k"/><path class="i9ivp18un wm-k"/><path class="s-cle7bfv wm-shine"/><path class="qzmw8qbfy wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:euro"} {...others} />);
}

export default Component;
