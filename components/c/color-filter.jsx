import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/eum0i25rl.css';
import '../../css/p/p5fn7zxfk.css';
import '../../css/d/db5zhxapf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRa3Mgdns"><g class="v3_i3wktz"><path class="eum0i25rl"/><path class="p5fn7zxfk"/><path class="db5zhxapf"/></g></mask></defs><path mask="url(#SVGRa3Mgdns)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:color-filter"} {...others} />);
}

export default Component;
