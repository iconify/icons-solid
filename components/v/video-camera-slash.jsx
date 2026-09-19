import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vugi_ac-r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vugi_ac-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:video-camera-slash"} {...others} />);
}

export default Component;
