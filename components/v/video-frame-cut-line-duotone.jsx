import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dwa9fqbkg.css';
import '../../css/f/fenutzb3t.css';
import '../../css/m/mtd-u7d6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dwa9fqbkg"/><path class="fenutzb3t"/><path class="mtd-u7d6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-cut-line-duotone"} {...others} />);
}

export default Component;
