import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/x/xq-eb7tgr.css';
import '../../css/s/s3jld-ptz.css';
import '../../css/l/lp4dwubvr.css';
import '../../css/i/iquxa7xng.css';
import '../../css/l/lpgrpbeix.css';
import '../../css/l/lhzhmhe2o.css';
import '../../css/y/y1n7dpbhe.css';
import '../../css/f/f44rtbbsv.css';
import '../../css/c/c0arizb2z.css';
import '../../css/m/mm5vk371v.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="xq-eb7tgr"/><path class="s3jld-ptz"/><path class="lp4dwubvr"/><path class="iquxa7xng"/><path class="lpgrpbeix"/><path class="lhzhmhe2o"/><path class="y1n7dpbhe"/><path class="f44rtbbsv"/><path class="c0arizb2z"/><path class="mm5vk371v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:coding"} {...others} />);
}

export default Component;
