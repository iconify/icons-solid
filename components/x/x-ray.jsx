import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/ki8srhbvr.css';
import '../../css/n/nsbwgjbhx.css';
import '../../css/s/s9n8of8mr.css';
import '../../css/h/h56q4yloh.css';
import '../../css/a/aow1kpo7v.css';
import '../../css/v/vcj-r0sgk.css';
import '../../css/c/cb1kwhz8b.css';
import '../../css/g/gaubz29ck.css';
import '../../css/z/zmu1d4bze.css';
import '../../css/k/kunxgwija.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ki8srhbvr"/><path class="nsbwgjbhx"/><path class="s9n8of8mr"/><path class="h56q4yloh"/><path class="aow1kpo7v"/><path class="vcj-r0sgk"/><path class="cb1kwhz8b"/><path class="gaubz29ck"/><path class="zmu1d4bze"/><path class="kunxgwija"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:x-ray"} {...others} />);
}

export default Component;
