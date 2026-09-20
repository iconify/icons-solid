import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0mjxcc0d.css';
import '../../css/i/icy1kprcx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j0mjxcc0d"/><path clip-rule="evenodd" class="icy1kprcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:tips"} {...others} />);
}

export default Component;
