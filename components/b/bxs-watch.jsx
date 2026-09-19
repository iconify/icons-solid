import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-5v66b_l.css';
import '../../css/u/u1kdlxb_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e-5v66b_l"/><path class="u1kdlxb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-watch"} {...others} />);
}

export default Component;
