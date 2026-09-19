import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tnigo-8vb.css';
import '../../css/b/b7rjdgn0s.css';
import '../../css/y/y0889gbgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tnigo-8vb"/><path class="b7rjdgn0s"/><path class="y0889gbgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:node-add"} {...others} />);
}

export default Component;
