import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_y09-bgq.css';
import '../../css/k/kxsg-jupr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_y09-bgq"/><path class="kxsg-jupr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hearts-bold"} {...others} />);
}

export default Component;
