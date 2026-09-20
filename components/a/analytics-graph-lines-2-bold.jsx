import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqd3i0b3h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tqd3i0b3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:analytics-graph-lines-2-bold"} {...others} />);
}

export default Component;
