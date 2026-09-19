import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7brlpbnx.css';
import '../../css/x/xz4txmb-d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b7brlpbnx"/><path class="xz4txmb-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-shuffle"} {...others} />);
}

export default Component;
