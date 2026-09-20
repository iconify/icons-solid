import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2z-9u.css';
import '../../css/g/g26hbu.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/i/ik5ydf.css';
import '../../css/a/ay17qu.css';
import '../../css/y/y4wbml.css';
import '../../css/q/qc_pkd.css';
import '../../css/z/zmhash.css';
import '../../css/t/tiaq0c.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-70.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-fwg6_w.css';
import '../../css/d/d-7yzihk.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG8CdprbBS"><path class="d2z-9u g26hbu t5pxry zxndow"/><path class="g26hbu ik5ydf"/><path class="ay17qu t5pxry y4wbml zxndow"/><path class="qc_pkd t5pxry y4wbml zmhash"/><path class="qc_pkd t5pxry tiaq0c y4wbml"/></mask></defs><path mask="url(#SVG8CdprbBS)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:monitor-arrow-down-filled"} {...others} />);
}

export default Component;
