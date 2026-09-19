import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zldcj7b5d.css';
import '../../css/t/tissekb1u.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="zldcj7b5d"/><path class="tissekb1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:metronome"} {...others} />);
}

export default Component;
