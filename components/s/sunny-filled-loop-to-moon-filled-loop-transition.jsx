import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk-d2l.css';
import '../../css/m/myr51h.css';
import '../../css/i/iw1iew.css';
import '../../css/n/n37p8h.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/a/a9560j.css';
import '../../css/b/bd04ze.css';
import '../../css/r/r-uhww.css';
import '../../css/n/n_33va.css';
import '../../css/z/ztd04i.css';
import '../../css/d/d-jssiii.css';
import '../../css/f/fade-to-0.css';
import '../../css/d/d-4w6zvc.css';
import '../../css/f/fade-to-1.css';
import '../../css/f/fade-d1si2b.css';
import '../../css/f/fade-6y6uho.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGZovyTcmE"><path class="sk-d2l"/><path class="myr51h"/></mask></defs><path class="iw1iew n37p8h"/><path mask="url(#SVGZovyTcmE)" class="lsejuv ydovum"/><path class="a9560j iw1iew ydovum"/><path class="bd04ze ydovum"/><path class="r-uhww ydovum"/><path class="n_33va ydovum"/><path class="ydovum ztd04i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:sunny-filled-loop-to-moon-filled-loop-transition"} {...others} />);
}

export default Component;
