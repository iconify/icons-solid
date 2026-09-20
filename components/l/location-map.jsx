import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/hs96w8b5o.css';
import '../../css/v/vdfc60r-c.css';
import '../../css/a/ala74cbvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="hs96w8b5o"/><path class="vdfc60r-c"/><path class="ala74cbvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:location-map"} {...others} />);
}

export default Component;
