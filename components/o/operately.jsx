import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgxvy9xdu.css';
import '../../css/o/on1z0j2yb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zgxvy9xdu"/><path class="on1z0j2yb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:operately"} {...others} />);
}

export default Component;
