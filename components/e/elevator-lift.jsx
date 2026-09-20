import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/g/gd-wmxb1j.css';
import '../../css/x/xik9ggbvz.css';
import '../../css/r/rs-pgpc-q.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="gd-wmxb1j"/><path class="xik9ggbvz"/><path class="rs-pgpc-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:elevator-lift"} {...others} />);
}

export default Component;
