import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qln93qb2w.css';
import '../../css/u/u_rcl8a1o.css';
import '../../css/x/xar7h661p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qln93qb2w"/><path class="u_rcl8a1o"/><path class="xar7h661p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:face-with-diagonal-mouth"} {...others} />);
}

export default Component;
