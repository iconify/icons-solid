import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mm_wv7bbg.css';
import '../../css/f/fg_t3bbbo.css';
import '../../css/v/v1quvlgyb.css';
import '../../css/i/i8k_orv2z.css';
import '../../css/h/h69rvacyr.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="mm_wv7bbg"/><path class="fg_t3bbbo"/><path class="v1quvlgyb"/><path class="i8k_orv2z"/><path class="h69rvacyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:bl"} {...others} />);
}

export default Component;
