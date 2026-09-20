import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w99tz1j_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w99tz1j_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:expand-down-stop"} {...others} />);
}

export default Component;
