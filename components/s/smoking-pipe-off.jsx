import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_c0p_b-q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_c0p_b-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:smoking-pipe-off"} {...others} />);
}

export default Component;
