import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dv_1wzb4e.css';
import '../../css/m/m2prtlavp.css';
import '../../css/w/w9bnwpm8v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dv_1wzb4e"/><path class="m2prtlavp"/><path class="w9bnwpm8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:silo-media-server-dark"} {...others} />);
}

export default Component;
