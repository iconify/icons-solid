import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ws3ao_gvd.css';
import '../../css/i/ipgap6l9e.css';
import '../../css/s/s6gvaj4gx.css';
import '../../css/b/btwpxcthz.css';
import '../../css/j/j-xmx-liq.css';
import '../../css/d/dcsh50byk.css';
import '../../css/s/sg2hs69ge.css';
import '../../css/i/iuz0xkb6u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ws3ao_gvd"/><path class="ipgap6l9e"/><path class="s6gvaj4gx"/><path class="btwpxcthz"/><path class="j-xmx-liq"/><path class="dcsh50byk"/><path class="sg2hs69ge"/><path class="iuz0xkb6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-basketball"} {...others} />);
}

export default Component;
