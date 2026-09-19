import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/pwk37mbjh.css';
import '../../css/b/bn5r6w_wn.css';
import '../../css/x/xtspv7bqw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQUzsH5So"><g class="v3_i3wktz"><path class="pwk37mbjh"/><path class="bn5r6w_wn"/><path class="xtspv7bqw"/></g></mask></defs><path mask="url(#SVGQUzsH5So)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:baby-pants"} {...others} />);
}

export default Component;
