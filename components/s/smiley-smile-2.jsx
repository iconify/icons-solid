import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/huogh35_q.css';
import '../../css/d/d_3u0kb9m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="huogh35_q"/><path class="d_3u0kb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-smile-2"} {...others} />);
}

export default Component;
