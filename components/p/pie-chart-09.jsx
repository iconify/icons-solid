import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_2xg0b1u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g_2xg0b1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pie-chart-09"} {...others} />);
}

export default Component;
