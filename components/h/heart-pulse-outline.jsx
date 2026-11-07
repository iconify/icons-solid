import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1oersbxq.css';
import '../../css/x/xmwn8lbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f1oersbxq"/><path clip-rule="evenodd" class="xmwn8lbyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-pulse-outline"} {...others} />);
}

export default Component;
