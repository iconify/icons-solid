import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ukcnf_qtw.css';
import '../../css/e/em_s9edvt.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="ukcnf_qtw"/><path class="em_s9edvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:shower"} {...others} />);
}

export default Component;
