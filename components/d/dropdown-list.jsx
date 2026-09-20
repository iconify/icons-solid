import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0yb-g_ug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s0yb-g_ug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:dropdown-list"} {...others} />);
}

export default Component;
