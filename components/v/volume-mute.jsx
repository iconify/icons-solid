import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdjmgxbmq.css';

const viewBox = {"width":192,"height":384};
const content = `<path class="sdjmgxbmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:volume-mute"} {...others} />);
}

export default Component;
