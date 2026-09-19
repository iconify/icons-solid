import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n60wjcjrd.css';
import '../../css/a/andv3-32c.css';
import '../../css/f/fvk7u7b5c.css';
import '../../css/l/l5c5w086j.css';
import '../../css/j/jz-3qjbhm.css';
import '../../css/a/ai-kegb5p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="n60wjcjrd"/><path class="andv3-32c"/><path class="fvk7u7b5c"/><path class="l5c5w086j"/><path class="jz-3qjbhm"/><path class="ai-kegb5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:cow-face"} {...others} />);
}

export default Component;
