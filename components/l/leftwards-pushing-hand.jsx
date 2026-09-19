import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-mkj44de.css';
import '../../css/b/bzp74jb9q.css';
import '../../css/t/t_9qd5hjv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q-mkj44de"/><path class="bzp74jb9q"/><path clip-rule="evenodd" class="t_9qd5hjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:leftwards-pushing-hand"} {...others} />);
}

export default Component;
