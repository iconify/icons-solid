import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_1xrq.css';
import '../../css/l/la34dl.css';
import '../../css/t/taf2xz.css';
import '../../css/l/l-kaag.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/m/mzxrkw.css';
import '../../css/s/s70b4t.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-e0pf-z.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-h46djy.css';
import '../../css/f/fill-to-1.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGk3XEvbFQ"><path class="g_1xrq la34dl taf2xz"/><path class="g_1xrq l-kaag"/></mask></defs><path mask="url(#SVGk3XEvbFQ)" class="lsejuv ydovum"/><path class="g_1xrq mzxrkw taf2xz ydovum"/><circle class="s70b4t ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:map-marker-multiple-alt-twotone"} {...others} />);
}

export default Component;
