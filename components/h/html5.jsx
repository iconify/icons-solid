import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jv3menb0n.css';
import '../../css/x/xr67tfbso.css';
import '../../css/d/dcxacmbtr.css';
import '../../css/a/ay7n0_bzf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jv3menb0n"/><path class="xr67tfbso"/><path class="dcxacmbtr"/><path class="ay7n0_bzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:html5"} {...others} />);
}

export default Component;
