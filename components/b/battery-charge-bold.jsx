import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a__s2g6zp.css';
import '../../css/f/f4sd56baf.css';
import '../../css/b/bbhoyd3dh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="a__s2g6zp"><path class="f4sd56baf"/><path class="bbhoyd3dh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-charge-bold"} {...others} />);
}

export default Component;
