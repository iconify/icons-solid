import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khqx3jp6l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="khqx3jp6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:paper-bag-filled"} {...others} />);
}

export default Component;
