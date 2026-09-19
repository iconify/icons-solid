import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fv38hwbsr.css';
import '../../css/q/q8x2ybboa.css';
import '../../css/t/tak5i_b9w.css';
import '../../css/a/a0a4fku7h.css';
import '../../css/a/aota5ejaw.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fv38hwbsr"/><path class="q8x2ybboa"/><path class="tak5i_b9w"/><path class="a0a4fku7h"/><path class="aota5ejaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:cu"} {...others} />);
}

export default Component;
