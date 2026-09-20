import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2f32u7hy.css';
import '../../css/p/pfssstxrq.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="r2f32u7hy"/><path class="pfssstxrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:mobile-phone"} {...others} />);
}

export default Component;
