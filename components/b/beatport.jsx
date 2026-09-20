import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pdy0rb19w.css';
import '../../css/j/jw8cvyb2l.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-5.5};
const content = `<g class="cuyn6tgcc"><path class="pdy0rb19w"/><path class="jw8cvyb2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:beatport"} {...others} />);
}

export default Component;
