import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j51b4ob1j.css';
import '../../css/i/ieygd_q0h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j51b4ob1j"/><path class="ieygd_q0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:location-alt-2"} {...others} />);
}

export default Component;
