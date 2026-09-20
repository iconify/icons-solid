import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ass7ltv7w.css';
import '../../css/c/cu4o4vbry.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ass7ltv7w"/><path clip-rule="evenodd" class="cu4o4vbry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:danmaku-off-fill"} {...others} />);
}

export default Component;
