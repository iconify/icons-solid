import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c4g5s3b0b.css';
import '../../css/h/hqu_4kbua.css';
import '../../css/q/qsf_4h99k.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(1 1)" class="n1lsf0bnc"><circle class="c4g5s3b0b"/><path class="hqu_4kbua"/><path class="qsf_4h99k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:retroeexcavadora"} {...others} />);
}

export default Component;
