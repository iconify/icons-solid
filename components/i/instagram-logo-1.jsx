import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/oi83abcqf.css';
import '../../css/w/wqmtzgbbi.css';
import '../../css/e/e-rh4-bqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="oi83abcqf"/><path class="wqmtzgbbi"/><path class="e-rh4-bqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:instagram-logo-1"} {...others} />);
}

export default Component;
