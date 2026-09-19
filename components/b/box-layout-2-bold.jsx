import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/m/m9569c2lu.css';
import '../../css/p/pfmce6b4y.css';
import '../../css/n/n40ywwckf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="pr52f_b5y"><rect class="m9569c2lu"/><rect class="pfmce6b4y"/><rect class="n40ywwckf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-layout-2-bold"} {...others} />);
}

export default Component;
