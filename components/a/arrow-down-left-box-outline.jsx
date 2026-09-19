import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkb-y5lvv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lkb-y5lvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:arrow-down-left-box-outline"} {...others} />);
}

export default Component;
