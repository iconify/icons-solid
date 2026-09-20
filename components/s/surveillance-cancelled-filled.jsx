import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg994ldbp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vg994ldbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:surveillance-cancelled-filled"} {...others} />);
}

export default Component;
