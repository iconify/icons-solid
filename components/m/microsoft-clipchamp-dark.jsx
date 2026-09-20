import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc41qkq7r.css';
import '../../css/u/uw9kbjbrf.css';
import '../../css/q/qcpl0ey1i.css';
import '../../css/r/rvp-1owcw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nc41qkq7r"/><path class="uw9kbjbrf"/><path class="qcpl0ey1i"/><path class="rvp-1owcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-clipchamp-dark"} {...others} />);
}

export default Component;
