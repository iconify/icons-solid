import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cu8p1jyfm.css';
import '../../css/c/c_91fblln.css';
import '../../css/w/wguz-gn9t.css';
import '../../css/p/pq-qeybii.css';
import '../../css/n/nyq9c63pw.css';
import '../../css/b/bj1_8bb3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cu8p1jyfm wm-shadow"/><path class="c_91fblln wm-k"/><path class="wguz-gn9t wm-k"/><path class="pq-qeybii wm-k"/><path class="nyq9c63pw wm-k"/><path class="bj1_8bb3v wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:check"} {...others} />);
}

export default Component;
