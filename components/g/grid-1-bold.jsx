import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsh9rtrrg.css';
import '../../css/b/bcu5qv4na.css';
import '../../css/a/a19po3bjs.css';
import '../../css/i/indg42tsb.css';
import '../../css/p/p97j_h87d.css';
import '../../css/a/a8ac7rohe.css';
import '../../css/k/krh365bnp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="tsh9rtrrg"><rect class="bcu5qv4na"/><rect class="a19po3bjs"/><rect class="indg42tsb"/><rect class="p97j_h87d"/><rect class="a8ac7rohe"/><rect class="krh365bnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grid-1-bold"} {...others} />);
}

export default Component;
