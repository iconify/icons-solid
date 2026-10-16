import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrocq5p6r.css';
import '../../css/j/jpsrod_ep.css';
import '../../css/c/cscfetsox.css';
import '../../css/o/o_hd5whvm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xrocq5p6r"/><path class="jpsrod_ep"/><path class="cscfetsox"/><path class="o_hd5whvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:screen-rotate-20-bold"} {...others} />);
}

export default Component;
