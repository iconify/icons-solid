import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe050eb3u.css';
import '../../css/x/x8k8-5b4d.css';
import '../../css/z/zw138qb4j.css';
import '../../css/v/vbpdh7-jd.css';
import '../../css/r/ri-4y14ys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qe050eb3u"/><path class="x8k8-5b4d"/><path class="zw138qb4j"/><path class="vbpdh7-jd"/><path class="ri-4y14ys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magic-wand-3-bold"} {...others} />);
}

export default Component;
