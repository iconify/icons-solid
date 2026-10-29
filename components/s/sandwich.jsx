import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsesjii1o.css';
import '../../css/c/cgef-6iwr.css';
import '../../css/j/ja401cbkq.css';
import '../../css/b/bqkbc_lay.css';
import '../../css/p/p-1szlb8h.css';
import '../../css/q/qi7qebcxf.css';
import '../../css/b/btxwcbb_i.css';
import '../../css/f/fc9dfabpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dsesjii1o wm-shadow"/><path class="cgef-6iwr wm-k"/><path class="ja401cbkq wm-k"/><path class="bqkbc_lay wm-k"/><path class="p-1szlb8h wm-k"/><path class="qi7qebcxf wm-shine"/><path class="btxwcbb_i wm-k"/><path class="fc9dfabpi wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:sandwich"} {...others} />);
}

export default Component;
