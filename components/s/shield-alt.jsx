import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6r_tccsq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i6r_tccsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:shield-alt"} {...others} />);
}

export default Component;
