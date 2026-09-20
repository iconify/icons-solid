import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inzgnbc9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="inzgnbc9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:hospital-square-sign"} {...others} />);
}

export default Component;
