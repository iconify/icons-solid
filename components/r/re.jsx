import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/y/ys6e26bgg.css';
import '../../css/v/vxfjjw1xy.css';
import '../../css/z/ztk0pg78c.css';
import '../../css/o/osc9nwrqm.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ys6e26bgg"/><path class="vxfjjw1xy"/><path class="ztk0pg78c"/><path class="osc9nwrqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:re"} {...others} />);
}

export default Component;
