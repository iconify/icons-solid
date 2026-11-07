import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g65hvpbwb.css';
import '../../css/q/q_b498z9b.css';
import '../../css/c/cxf8pnbrz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g65hvpbwb"/><path class="q_b498z9b"/><path class="cxf8pnbrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:moon-sleep-bold"} {...others} />);
}

export default Component;
