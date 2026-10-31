import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bue8_rb3u.css';
import '../../css/w/w13ubjbvr.css';
import '../../css/w/wdlx4qwzb.css';
import '../../css/i/ii4ionbci.css';

const viewBox = {"width":300,"height":159};
const content = `<g class="ft5dv1b6b"><path class="bue8_rb3u"/><path class="w13ubjbvr"/><path class="wdlx4qwzb"/><path class="ii4ionbci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:us"} {...others} />);
}

export default Component;
