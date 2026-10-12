import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrxjo1bon.css';
import '../../css/q/qkwk8ibgx.css';
import '../../css/r/r1vzay_4x.css';
import '../../css/k/k6j_13bxy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wrxjo1bon"/><path class="qkwk8ibgx"/><path class="r1vzay_4x"/><path class="k6j_13bxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:roundabout-48"} {...others} />);
}

export default Component;
