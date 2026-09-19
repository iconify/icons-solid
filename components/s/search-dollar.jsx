import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksl-n8z_w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ksl-n8z_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:search-dollar"} {...others} />);
}

export default Component;
