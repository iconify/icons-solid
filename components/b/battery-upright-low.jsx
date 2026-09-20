import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rx98c1b-d.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="rx98c1b-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:battery-upright-low"} {...others} />);
}

export default Component;
