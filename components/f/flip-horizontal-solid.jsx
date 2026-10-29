import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gyb0ttgij.css';
import '../../css/c/cqdi93nbk.css';
import '../../css/t/t4376zjzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="gyb0ttgij"/><path class="cqdi93nbk wm-a"/><path class="t4376zjzy wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flip-horizontal-solid"} {...others} />);
}

export default Component;
