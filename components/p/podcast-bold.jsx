import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mn68y7huu.css';
import '../../css/h/hwymrt-6b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mn68y7huu"/><path class="hwymrt-6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:podcast-bold"} {...others} />);
}

export default Component;
