import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pebrwvkwi.css';
import '../../css/d/dcxpedjwt.css';
import '../../css/q/q58dk-rrt.css';
import '../../css/r/r8okteb3s.css';
import '../../css/u/u39a2n-_n.css';
import '../../css/v/vxcoiqgnj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pebrwvkwi"/><path class="dcxpedjwt"/><path class="q58dk-rrt"/><path class="r8okteb3s"/><path class="u39a2n-_n"/><path class="vxcoiqgnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-outlook-light"} {...others} />);
}

export default Component;
