import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jphu-3yyd.css';
import '../../css/t/th91q255p.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="jphu-3yyd"/><path class="th91q255p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:basket-error"} {...others} />);
}

export default Component;
