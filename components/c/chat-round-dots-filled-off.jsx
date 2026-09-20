import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g26hbu.css';
import '../../css/t/t5pxry.css';
import '../../css/z/z70o0j.css';
import '../../css/b/b9qm4w.css';
import '../../css/h/h15w-v.css';
import '../../css/q/qc_pkd.css';
import '../../css/y/y4wbml.css';
import '../../css/k/ko-nhy.css';
import '../../css/y/yr8c4b.css';
import '../../css/n/nsraqz.css';
import '../../css/r/rxk3zz.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-ssqjbr.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGccm9xcZA"><path class="g26hbu t5pxry z70o0j"/><path class="b9qm4w g26hbu"/><path class="h15w-v qc_pkd t5pxry y4wbml"/><path class="ko-nhy qc_pkd t5pxry y4wbml"/><path class="qc_pkd t5pxry y4wbml yr8c4b"/><path class="nsraqz qc_pkd rxk3zz t5pxry y4wbml"/></mask></defs><path mask="url(#SVGccm9xcZA)" class="botfzx"/><path class="gd_4-q rxk3zz t5pxry y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:chat-round-dots-filled-off"} {...others} />);
}

export default Component;
