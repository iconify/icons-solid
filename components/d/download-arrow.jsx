import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/y3vr5wbqc.css';
import '../../css/p/p-t1syddl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="pr52f_b5y"><path class="y3vr5wbqc"/><path class="p-t1syddl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:download-arrow"} {...others} />);
}

export default Component;
