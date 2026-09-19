import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/w7mzmcwfz.css';
import '../../css/m/mf42w9b3n.css';
import '../../css/z/zx8xtccho.css';
import '../../css/s/s06r0_b1e.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="w7mzmcwfz"/><path class="mf42w9b3n"/><path class="zx8xtccho"/><path class="s06r0_b1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:us-az"} {...others} />);
}

export default Component;
