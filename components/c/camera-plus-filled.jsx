import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqtjih4ab.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqtjih4ab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:camera-plus-filled"} {...others} />);
}

export default Component;
