import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_r5p_b_y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g_r5p_b_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:beaker"} {...others} />);
}

export default Component;
