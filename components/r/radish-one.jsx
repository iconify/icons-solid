import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/p/pvazv6bgg.css';
import '../../css/j/jf4k5ebnl.css';
import '../../css/t/t6mhapbsb.css';
import '../../css/i/ii2_g0sel.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnPP2Fbab"><g class="wwvp95byt"><path class="pvazv6bgg"/><path class="jf4k5ebnl"/><path class="t6mhapbsb"/><path class="ii2_g0sel"/></g></mask></defs><path mask="url(#SVGnPP2Fbab)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:radish-one"} {...others} />);
}

export default Component;
