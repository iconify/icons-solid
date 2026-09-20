import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_1xrq.css';
import '../../css/t/taf2xz.css';
import '../../css/t/ths9-r.css';
import '../../css/i/iro18k.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/v/v6-7zq.css';
import '../../css/s/s70b4t.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-e0pf-z.css';
import '../../css/t/tr-7ecuqx.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-h46djy.css';
import '../../css/f/fill-to-1.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGiZVYJeso"><path class="g_1xrq taf2xz ths9-r"/><path class="g_1xrq iro18k"/></mask></defs><path mask="url(#SVGiZVYJeso)" class="lsejuv ydovum"/><path class="g_1xrq taf2xz v6-7zq ydovum"/><circle class="s70b4t ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:map-marker-multiple-alt-twotone-loop"} {...others} />);
}

export default Component;
