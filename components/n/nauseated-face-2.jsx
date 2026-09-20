import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbn21p4wc.css';
import '../../css/z/zf48sebdb.css';
import '../../css/y/y223_5boq.css';
import '../../css/s/s_f6m4b-b.css';
import '../../css/j/juu6lxbqs.css';
import '../../css/e/eupwhfvoo.css';
import '../../css/j/jgv77wshb.css';
import '../../css/g/gjgf5sb2k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vbn21p4wc"/><path class="zf48sebdb"/><path class="y223_5boq"/><path class="s_f6m4b-b"/><path class="juu6lxbqs"/><path class="eupwhfvoo"/><path class="jgv77wshb"/><path class="gjgf5sb2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:nauseated-face-2"} {...others} />);
}

export default Component;
