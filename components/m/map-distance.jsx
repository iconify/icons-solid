import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/inojwwb7m.css';
import '../../css/n/n2sextrqm.css';
import '../../css/d/dgnr1xb0j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGisIfnbwp"><g class="v3_i3wktz"><path class="inojwwb7m"/><path class="n2sextrqm"/><path class="dgnr1xb0j"/></g></mask></defs><path mask="url(#SVGisIfnbwp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:map-distance"} {...others} />);
}

export default Component;
