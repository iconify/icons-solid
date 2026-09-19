import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h28-skbwv.css';
import '../../css/b/b7rjdgn0s.css';
import '../../css/l/ly00bcc9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h28-skbwv"/><path class="b7rjdgn0s"/><path class="ly00bcc9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:node-remove"} {...others} />);
}

export default Component;
