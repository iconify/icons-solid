import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/ivhf0t8df.css';
import '../../css/f/fy6yoobgu.css';
import '../../css/w/we5o1tfwy.css';
import '../../css/q/qua3ax2ke.css';
import '../../css/k/k8_b02b3v.css';
import '../../css/u/u8sm41r3w.css';
import '../../css/w/w44mrxb8h.css';
import '../../css/b/bxr9lgajk.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ivhf0t8df"/><path class="fy6yoobgu"/><path class="we5o1tfwy"/><path class="qua3ax2ke"/><path class="k8_b02b3v"/><path class="u8sm41r3w"/><rect class="w44mrxb8h"/><path class="bxr9lgajk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:mx"} {...others} />);
}

export default Component;
