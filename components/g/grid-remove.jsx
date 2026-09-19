import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/h/h6axb1buv.css';
import '../../css/n/nljoyacmt.css';
import '../../css/w/wop--n-hn.css';
import '../../css/k/k75pw74wa.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="gopnm44um"><rect class="h6axb1buv"/><rect class="nljoyacmt"/><rect class="wop--n-hn"/><path class="k75pw74wa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:grid-remove"} {...others} />);
}

export default Component;
