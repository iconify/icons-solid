import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4_n57b9h.css';

const viewBox = {"width":1026,"height":1023};
const content = `<path class="p4_n57b9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:weightscale"} {...others} />);
}

export default Component;
