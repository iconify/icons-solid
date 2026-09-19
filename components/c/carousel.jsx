import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xuksmcb-j.css';
import '../../css/d/dpfsicbuv.css';
import '../../css/o/oq2jbxbhn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYS4T2b6v"><g class="v3_i3wktz"><path class="xuksmcb-j"/><path class="dpfsicbuv"/><path class="oq2jbxbhn"/></g></mask></defs><path mask="url(#SVGYS4T2b6v)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:carousel"} {...others} />);
}

export default Component;
