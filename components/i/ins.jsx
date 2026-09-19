import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zst3r7bmm.css';
import '../../css/l/l5yicfbnc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="n1lsf0bnc"><path class="zst3r7bmm"/><path class="l5yicfbnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:ins"} {...others} />);
}

export default Component;
