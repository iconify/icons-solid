import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/o/o477sp5ja.css';
import '../../css/j/jug0s5vas.css';
import '../../css/p/p2pks0acd.css';
import '../../css/d/ddjdzib0d.css';
import '../../css/b/bp-k_tjsz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGB9lYubCw"><g class="rohhhzb0l"><path class="o477sp5ja"/><rect class="jug0s5vas"/><path class="p2pks0acd"/><path class="ddjdzib0d"/><path class="bp-k_tjsz"/></g></mask></defs><path mask="url(#SVGB9lYubCw)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hotel"} {...others} />);
}

export default Component;
