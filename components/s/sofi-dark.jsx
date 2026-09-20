import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1nyiyxfr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d1nyiyxfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sofi-dark"} {...others} />);
}

export default Component;
