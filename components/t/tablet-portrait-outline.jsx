import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kv4wt1bhc.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="kv4wt1bhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:tablet-portrait-outline"} {...others} />);
}

export default Component;
