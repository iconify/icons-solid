import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ieqwf_b3i.css';
import '../../css/y/yasd2p6xh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ieqwf_b3i"/><path class="yasd2p6xh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-drive-dark"} {...others} />);
}

export default Component;
