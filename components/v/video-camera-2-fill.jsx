import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lb5c5ou6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lb5c5ou6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:video-camera-2-fill"} {...others} />);
}

export default Component;
