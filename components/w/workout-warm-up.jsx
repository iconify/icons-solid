import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/za89ow1xt.css';
import '../../css/a/azl73ac5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="za89ow1xt"/><path class="azl73ac5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workout-warm-up"} {...others} />);
}

export default Component;
