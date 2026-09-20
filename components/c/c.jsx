import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzhaf9bvh.css';
import '../../css/f/ffyk6os7s.css';
import '../../css/m/m1ojfhsdd.css';
import '../../css/a/ac9aihdmz.css';
import '../../css/s/s2bv4t-pq.css';
import '../../css/a/a4yjhac0d.css';
import '../../css/n/n60qy3ekt.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xzhaf9bvh"/><path class="ffyk6os7s"/><path class="m1ojfhsdd"/><path class="ac9aihdmz"/><path class="s2bv4t-pq"/><path class="a4yjhac0d"/><path class="n60qy3ekt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:c"} {...others} />);
}

export default Component;
