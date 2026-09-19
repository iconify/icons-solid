import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4_g4nd3y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n4_g4nd3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:cloud-outline"} {...others} />);
}

export default Component;
