import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zn-yurbog.css';
import '../../css/d/d_riacq0t.css';
import '../../css/s/s0kdq1bqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zn-yurbog"/><path class="d_riacq0t"/><path class="s0kdq1bqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-dot-open-broken"} {...others} />);
}

export default Component;
