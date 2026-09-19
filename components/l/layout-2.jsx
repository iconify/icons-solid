import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fir3l4bbe.css';
import '../../css/f/ftm8sv4vo.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="fir3l4bbe"/><path class="ftm8sv4vo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:layout-2"} {...others} />);
}

export default Component;
