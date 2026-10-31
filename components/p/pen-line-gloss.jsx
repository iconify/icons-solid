import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kbqhvbc1j.css';
import '../../css/z/zf7518b8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="kbqhvbc1j wm-k"/><path class="wm-a zf7518b8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pen-line-gloss"} {...others} />);
}

export default Component;
