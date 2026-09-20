import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_1xrq.css';
import '../../css/k/kdlwvh.css';
import '../../css/y/yuzzkf.css';
import '../../css/q/qw8aly.css';
import '../../css/t/t60gks.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/s/s8e22g.css';
import '../../css/v/vsl3op.css';
import '../../css/d/d-e0pf-z.css';
import '../../css/t/tr-7ecuqx.css';
import '../../css/d/d-h46djy.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGSExJFbpv"><path class="g_1xrq kdlwvh yuzzkf"/><path class="g_1xrq qw8aly t60gks"/></mask></defs><path mask="url(#SVGSExJFbpv)" class="lsejuv ydovum"/><path class="g_1xrq s8e22g t60gks yuzzkf"/><circle class="vsl3op ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:map-marker-multiple-alt-loop"} {...others} />);
}

export default Component;
