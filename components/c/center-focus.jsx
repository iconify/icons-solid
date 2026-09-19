import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do3z1_b6o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="do3z1_b6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:center-focus"} {...others} />);
}

export default Component;
