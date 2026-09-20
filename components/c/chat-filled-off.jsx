import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/so5a6b.css';
import '../../css/t/t5pxry.css';
import '../../css/q/qc_pkd.css';
import '../../css/y/y4wbml.css';
import '../../css/y/ycqeef.css';
import '../../css/j/jrczgc.css';
import '../../css/u/uv8njc.css';
import '../../css/n/nsraqz.css';
import '../../css/p/p9atcd.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-70.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGmbROrbkQ"><path class="so5a6b t5pxry"/><path class="qc_pkd t5pxry y4wbml ycqeef"/><path class="jrczgc qc_pkd t5pxry y4wbml"/><path class="qc_pkd t5pxry uv8njc y4wbml"/><path class="nsraqz p9atcd qc_pkd t5pxry y4wbml"/></mask></defs><path mask="url(#SVGmbROrbkQ)" class="botfzx"/><path class="gd_4-q p9atcd t5pxry y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:chat-filled-off"} {...others} />);
}

export default Component;
