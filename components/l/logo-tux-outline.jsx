import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntr_u1-hk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ntr_u1-hk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-tux-outline"} {...others} />);
}

export default Component;
