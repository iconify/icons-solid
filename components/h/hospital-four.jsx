import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/ftx97sszt.css';
import '../../css/k/k2s34dbla.css';
import '../../css/d/d28i31-ro.css';
import '../../css/s/sn4envb4f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2eakkdSR"><g class="v3_i3wktz"><path class="ftx97sszt"/><path class="k2s34dbla"/><path class="d28i31-ro"/><path class="sn4envb4f"/></g></mask></defs><path mask="url(#SVG2eakkdSR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hospital-four"} {...others} />);
}

export default Component;
