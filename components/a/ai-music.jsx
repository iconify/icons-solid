import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/luqtis4dk.css';
import '../../css/l/l1s4kwyog.css';
import '../../css/n/nfvp6y46e.css';

const viewBox = {"width":25,"height":24};
const content = `<g class="ft5dv1b6b"><path class="luqtis4dk"/><path class="l1s4kwyog"/><path class="nfvp6y46e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-music"} {...others} />);
}

export default Component;
