import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uewk6gbpn.css';
import '../../css/n/n6aw6y4ob.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="uewk6gbpn"/><path class="n6aw6y4ob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:image"} {...others} />);
}

export default Component;
