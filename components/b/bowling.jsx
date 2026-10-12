import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-bw6wa-j.css';
import '../../css/j/jlsu5iqcr.css';
import '../../css/n/ngmltab6q.css';
import '../../css/w/whw_3lguc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s-bw6wa-j"/><path class="jlsu5iqcr"/><path class="ngmltab6q"/><path class="whw_3lguc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bowling"} {...others} />);
}

export default Component;
