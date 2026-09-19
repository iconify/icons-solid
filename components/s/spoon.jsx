import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/n0x7fpbok.css';
import '../../css/o/ocruyxbsi.css';
import '../../css/d/dtvtwg_gj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYO5OyeAT"><g class="aql7dnt-u"><rect class="n0x7fpbok"/><path class="ocruyxbsi"/><rect class="dtvtwg_gj"/></g></mask></defs><path mask="url(#SVGYO5OyeAT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:spoon"} {...others} />);
}

export default Component;
