import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ctj3rjb4v.css';
import '../../css/b/btzdm52ie.css';
import '../../css/o/ozb_s7b-p.css';
import '../../css/w/wfdqjoq5g.css';
import '../../css/g/gvknrc_jx.css';
import '../../css/q/qado12snh.css';
import '../../css/y/y93l-ibqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ctj3rjb4v wm-k"/><path class="btzdm52ie wm-k"/><path class="ozb_s7b-p wm-k"/><path class="wfdqjoq5g wm-shine"/><path class="gvknrc_jx wm-a"/><path class="qado12snh wm-a"/><path class="wm-a y93l-ibqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:plane-takeoff"} {...others} />);
}

export default Component;
