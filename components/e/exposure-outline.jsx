import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzf7mi7he.css';
import '../../css/h/hrlch2b6j.css';
import '../../css/z/zdrhem_xs.css';
import '../../css/r/ra0veia6x.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xzf7mi7he"/><path clip-rule="evenodd" class="hrlch2b6j"/><path class="zdrhem_xs"/><path clip-rule="evenodd" class="ra0veia6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:exposure-outline"} {...others} />);
}

export default Component;
