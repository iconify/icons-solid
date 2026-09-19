import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/v/v3v0unr3c.css';
import '../../css/f/f9s13obdp.css';
import '../../css/v/v-4_iy42m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNqi2ydLJ"><g class="ufeehvblu"><path class="v3v0unr3c"/><path class="f9s13obdp"/><path class="v-4_iy42m"/></g></mask></defs><path mask="url(#SVGNqi2ydLJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:full-selection"} {...others} />);
}

export default Component;
