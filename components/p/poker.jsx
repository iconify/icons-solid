import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dugufridm.css';
import '../../css/s/srynasjdu.css';
import '../../css/m/m6vioqbko.css';
import '../../css/s/sw1ouqb9w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGi9ljhdVb"><g class="v3_i3wktz"><path class="dugufridm"/><path clip-rule="evenodd" class="srynasjdu"/><path class="m6vioqbko"/><path class="sw1ouqb9w"/></g></mask></defs><path mask="url(#SVGi9ljhdVb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:poker"} {...others} />);
}

export default Component;
