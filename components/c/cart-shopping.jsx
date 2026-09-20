import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j5mejsbpb.css';
import '../../css/r/r5o1yj3oq.css';
import '../../css/o/o8snvbc3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j5mejsbpb"/><path class="r5o1yj3oq"/><path class="o8snvbc3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cart-shopping"} {...others} />);
}

export default Component;
