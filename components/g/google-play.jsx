import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfea3xd4k.css';
import '../../css/j/j_uaq2b1q.css';
import '../../css/g/gzde_vbeg.css';
import '../../css/f/fri7vv0zh.css';

const viewBox = {"width":466,"height":511.98};
const content = `<path class="yfea3xd4k"/><path class="j_uaq2b1q"/><path class="gzde_vbeg"/><path class="fri7vv0zh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:google-play"} {...others} />);
}

export default Component;
