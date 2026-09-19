import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvb7dyg7m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xvb7dyg7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:happy-heart-eyes-filled"} {...others} />);
}

export default Component;
