import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ps-_vdhwt.css';
import '../../css/h/hvfye0b1q.css';
import '../../css/h/hvb67bbxh.css';
import '../../css/u/u6yclibvo.css';
import '../../css/r/ra3-_cbvh.css';
import '../../css/e/e-ghi59is.css';
import '../../css/u/uxeollb4v.css';
import '../../css/g/g0i_vcb7p.css';
import '../../css/a/ap-4lccds.css';
import '../../css/d/d8g8wnbly.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ps-_vdhwt wm-shadow"/><path class="hvfye0b1q wm-k"/><path class="hvb67bbxh wm-k"/><path class="u6yclibvo wm-k"/><path class="ra3-_cbvh wm-k"/><path class="e-ghi59is wm-k"/><path class="uxeollb4v wm-shine"/><path class="g0i_vcb7p wm-a"/><path class="ap-4lccds wm-a"/><path class="d8g8wnbly wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:gem"} {...others} />);
}

export default Component;
