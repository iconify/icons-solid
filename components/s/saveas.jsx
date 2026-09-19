import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jjbkisfvx.css';
import '../../css/c/cvjo67o6j.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="jjbkisfvx"/><path class="cvjo67o6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:saveas"} {...others} />);
}

export default Component;
