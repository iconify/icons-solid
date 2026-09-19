import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bv4586n5c.css';
import '../../css/s/sqpivhksc.css';
import '../../css/k/kivyvktmd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGn7lS4UgA"><g class="v3_i3wktz"><path class="bv4586n5c"/><path clip-rule="evenodd" class="sqpivhksc"/><path class="kivyvktmd"/></g></mask></defs><path mask="url(#SVGn7lS4UgA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:monitor"} {...others} />);
}

export default Component;
