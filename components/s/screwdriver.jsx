import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dvsz9oblk.css';
import '../../css/p/pzopvfbeg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfNfIncUa"><g class="v3_i3wktz"><path class="dvsz9oblk"/><path class="pzopvfbeg"/></g></mask></defs><path mask="url(#SVGfNfIncUa)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:screwdriver"} {...others} />);
}

export default Component;
