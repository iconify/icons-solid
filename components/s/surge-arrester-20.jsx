import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8e0leq0r.css';
import '../../css/q/q1_5-_7tc.css';
import '../../css/a/at0_quf1s.css';
import '../../css/w/wmb9_e4hg.css';
import '../../css/b/bvarigeyo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w8e0leq0r"/><path class="q1_5-_7tc"/><path class="at0_quf1s"/><path class="wmb9_e4hg"/><path class="bvarigeyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:surge-arrester-20"} {...others} />);
}

export default Component;
