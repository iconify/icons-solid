import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rqsxkhbqx.css';
import '../../css/m/mlzc_fbxq.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="rqsxkhbqx"/><path class="mlzc_fbxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:screen-ful"} {...others} />);
}

export default Component;
