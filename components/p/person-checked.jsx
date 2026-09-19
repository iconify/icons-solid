import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lq9jk7bis.css';
import '../../css/q/qcq1wlbmd.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="lq9jk7bis"/><path class="qcq1wlbmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:person-checked"} {...others} />);
}

export default Component;
