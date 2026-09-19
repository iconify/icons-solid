import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fygymggnq.css';
import '../../css/e/e073xiy2p.css';
import '../../css/p/pfrgd_vdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="fygymggnq"/><path class="e073xiy2p"/><path class="pfrgd_vdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:alphabet-hindi"} {...others} />);
}

export default Component;
