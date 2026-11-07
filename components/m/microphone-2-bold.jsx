import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzdt-h-hq.css';
import '../../css/w/w8iuawbsc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xzdt-h-hq"/><path clip-rule="evenodd" class="w8iuawbsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:microphone-2-bold"} {...others} />);
}

export default Component;
