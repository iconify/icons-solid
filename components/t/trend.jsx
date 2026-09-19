import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/ua-z8vb0h.css';
import '../../css/s/sum4lw3dc.css';
import '../../css/h/h8swm4ika.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOqCrabHq"><g class="v3_i3wktz"><path class="ua-z8vb0h"/><path class="sum4lw3dc"/><path class="h8swm4ika"/></g></mask></defs><path mask="url(#SVGOqCrabHq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:trend"} {...others} />);
}

export default Component;
