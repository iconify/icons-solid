import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o6d5x6bkk.css';
import '../../css/h/hj2v57bvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="o6d5x6bkk"/><path class="hj2v57bvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:octagon-minus"} {...others} />);
}

export default Component;
