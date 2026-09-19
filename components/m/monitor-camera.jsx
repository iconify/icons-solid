import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/ev3k07pzc.css';
import '../../css/g/gm0q2sb5a.css';
import '../../css/k/kpw1mub_b.css';
import '../../css/g/gujnp2wzw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1G9yiezX"><g class="v3_i3wktz"><path class="ev3k07pzc"/><path class="gm0q2sb5a"/><path clip-rule="evenodd" class="kpw1mub_b"/><path class="gujnp2wzw"/></g></mask></defs><path mask="url(#SVG1G9yiezX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:monitor-camera"} {...others} />);
}

export default Component;
