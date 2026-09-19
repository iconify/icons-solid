import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxq9lab-m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vxq9lab-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:laugh-filled"} {...others} />);
}

export default Component;
