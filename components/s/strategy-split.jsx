import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l81mmbb0d.css';
import '../../css/s/s0uio8bfy.css';
import '../../css/q/q9u26u22n.css';
import '../../css/o/ooq389b7i.css';
import '../../css/z/zylcysbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l81mmbb0d"/><path class="s0uio8bfy"/><path class="q9u26u22n"/><path class="ooq389b7i"/><path class="zylcysbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:strategy-split"} {...others} />);
}

export default Component;
