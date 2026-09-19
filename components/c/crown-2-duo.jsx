import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwpxa05bi.css';
import '../../css/w/wqkaihb1k.css';
import '../../css/u/umazo3bdr.css';
import '../../css/b/bby-jcaxr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="nwpxa05bi"/><path class="wqkaihb1k"/><path class="umazo3bdr"/><path class="bby-jcaxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crown-2-duo"} {...others} />);
}

export default Component;
