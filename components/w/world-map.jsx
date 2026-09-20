import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/y/ydht5db_k.css';
import '../../css/q/q1j7fgoua.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/p/p61-0ivql.css';
import '../../css/y/yflhfssqa.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><path class="ydht5db_k"/><path class="q1j7fgoua"/></g><g class="ij2x_72vy"><path class="p61-0ivql"/><path class="yflhfssqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:world-map"} {...others} />);
}

export default Component;
