import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/w5xyq8egd.css';
import '../../css/i/i08mdbbdr.css';
import '../../css/l/letow6vpi.css';
import '../../css/y/yttteebpq.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="w5xyq8egd"/><path class="i08mdbbdr"/><path class="letow6vpi"/><circle class="yttteebpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:us-co"} {...others} />);
}

export default Component;
