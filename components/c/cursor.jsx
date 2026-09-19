import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz7s1z9sz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wz7s1z9sz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:cursor"} {...others} />);
}

export default Component;
