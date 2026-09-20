import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/ngekvelpk.css';
import '../../css/k/kga49o1gr.css';
import '../../css/y/ykp8htwkq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="ngekvelpk"/><path vector-effect="non-scaling-stroke" class="kga49o1gr"/><path vector-effect="non-scaling-stroke" class="ykp8htwkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:verse"} {...others} />);
}

export default Component;
