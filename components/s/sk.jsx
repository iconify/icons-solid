import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/l/lqmrgobox.css';
import '../../css/n/njjlvxbsv.css';
import '../../css/o/o_l2d_mjq.css';
import '../../css/m/mf8cg9p0v.css';
import '../../css/s/sax0pp-vi.css';
import '../../css/p/pi6uf6b_t.css';
import '../../css/i/i-ifgvbws.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="lqmrgobox"/><path class="njjlvxbsv"/><path class="o_l2d_mjq"/><path class="mf8cg9p0v"/><path class="sax0pp-vi"/><path class="pi6uf6b_t"/><path class="i-ifgvbws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:sk"} {...others} />);
}

export default Component;
