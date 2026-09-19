import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0_a_7k0f.css';
import '../../css/w/wk4cq8krv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e0_a_7k0f"/><path class="wk4cq8krv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:at-circle-sharp"} {...others} />);
}

export default Component;
