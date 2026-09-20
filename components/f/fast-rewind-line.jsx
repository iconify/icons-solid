import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbn26714g.css';
import '../../css/u/u_kdwj32h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qbn26714g"/><path class="u_kdwj32h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fast-rewind-line"} {...others} />);
}

export default Component;
