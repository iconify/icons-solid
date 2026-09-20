import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9a_qcc_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j9a_qcc_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:fire-extinguisher"} {...others} />);
}

export default Component;
