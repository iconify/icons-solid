import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqyla2b2h.css';
import '../../css/i/iq4xuabkk.css';
import '../../css/s/sh_hm59tu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGV463idEB"><g class="ft5dv1b6b"><path class="aqyla2b2h"/><path class="iq4xuabkk"/><path class="sh_hm59tu"/></g></mask></defs><path mask="url(#SVGV463idEB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:paragraph-alphabet"} {...others} />);
}

export default Component;
