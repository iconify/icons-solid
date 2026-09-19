import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyzqfc13x.css';
import '../../css/e/e_0e-zbty.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="zyzqfc13x"/><path class="e_0e-zbty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:watch"} {...others} />);
}

export default Component;
