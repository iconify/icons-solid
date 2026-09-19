import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/ft77-ebzx.css';
import '../../css/q/qc9eehbrm.css';
import '../../css/c/cqogv-bcd.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="ft77-ebzx"/><path class="qc9eehbrm"/><path class="cqogv-bcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:wash-machine-2"} {...others} />);
}

export default Component;
