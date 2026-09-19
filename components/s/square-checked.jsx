import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gxyqf6bqs.css';
import '../../css/m/me1_6-b3q.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="gxyqf6bqs"/><path class="me1_6-b3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:square-checked"} {...others} />);
}

export default Component;
