import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l0fzwvb4b.css';
import '../../css/l/l4n1o8blm.css';
import '../../css/s/suffk5-7v.css';
import '../../css/x/xg922ebyc.css';
import '../../css/s/s_p243b7j.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="l0fzwvb4b"/><path class="l4n1o8blm"/><path class="suffk5-7v"/><path class="xg922ebyc"/><path class="s_p243b7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:movie-camera"} {...others} />);
}

export default Component;
