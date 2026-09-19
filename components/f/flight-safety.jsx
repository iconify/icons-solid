import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/sedcd-iki.css';
import '../../css/g/gbrw6u1ww.css';
import '../../css/a/adk15x0vw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlbyQ8SSh"><g class="v3_i3wktz"><path class="sedcd-iki"/><path class="gbrw6u1ww"/><path class="adk15x0vw"/></g></mask></defs><path mask="url(#SVGlbyQ8SSh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:flight-safety"} {...others} />);
}

export default Component;
