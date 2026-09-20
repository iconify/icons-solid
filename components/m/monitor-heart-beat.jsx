import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fo9kpex6w.css';
import '../../css/o/osiihfnwq.css';
import '../../css/j/jbwve3w4h.css';
import '../../css/d/d4bk0tbjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fo9kpex6w"/><path class="osiihfnwq"/><path class="jbwve3w4h"/><path class="d4bk0tbjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:monitor-heart-beat"} {...others} />);
}

export default Component;
