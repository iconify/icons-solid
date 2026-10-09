import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkhn5jbgt.css';
import '../../css/d/dhw4upg8s.css';
import '../../css/z/zc_r19v3f.css';
import '../../css/y/y7nx7r7jd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hkhn5jbgt"/><path class="dhw4upg8s"/><path class="zc_r19v3f"/><path class="y7nx7r7jd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:construction-crane-20"} {...others} />);
}

export default Component;
