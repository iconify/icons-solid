import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/heiq7gbwr.css';
import '../../css/z/zlle-kb6z.css';
import '../../css/d/dy-b33bes.css';
import '../../css/h/hhwbofbnj.css';
import '../../css/y/yd-_46b4x.css';
import '../../css/z/zg5se7_hh.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 heiq7gbwr"/><path class="clr-i-outline clr-i-outline-path-2 zlle-kb6z"/><path class="clr-i-outline clr-i-outline-path-3 dy-b33bes"/><path class="clr-i-outline clr-i-outline-path-4 hhwbofbnj"/><path class="clr-i-outline clr-i-outline-path-5 yd-_46b4x"/><path class="clr-i-outline clr-i-outline-path-6 zg5se7_hh"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:squid-line"} {...others} />);
}

export default Component;
