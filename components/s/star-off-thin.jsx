import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/deq-q_bvq.css';
import '../../css/d/d98b5gbit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="deq-q_bvq"/><path class="d98b5gbit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:star-off-thin"} {...others} />);
}

export default Component;
