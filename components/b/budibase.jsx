import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6qukq9cv.css';
import '../../css/h/hanvsqb3d.css';
import '../../css/z/zw_xzep2q.css';
import '../../css/l/l9467px0a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n6qukq9cv"/><path class="hanvsqb3d"/><path class="zw_xzep2q"/><path class="l9467px0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:budibase"} {...others} />);
}

export default Component;
