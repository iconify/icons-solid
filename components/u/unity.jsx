import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/czmlrnchy.css';
import '../../css/b/bxbmi0nho.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="n1lsf0bnc"><path class="czmlrnchy"/><path class="bxbmi0nho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:unity"} {...others} />);
}

export default Component;
