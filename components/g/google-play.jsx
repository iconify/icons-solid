import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1nk1ccxq.css';
import '../../css/u/u_gt56b5j.css';
import '../../css/i/iiskqebcm.css';
import '../../css/n/nv0-e7t8v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y1nk1ccxq"/><path class="u_gt56b5j"/><path class="iiskqebcm"/><path class="nv0-e7t8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-play"} {...others} />);
}

export default Component;
