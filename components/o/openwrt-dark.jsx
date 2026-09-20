import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v75o0q40y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v75o0q40y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openwrt-dark"} {...others} />);
}

export default Component;
