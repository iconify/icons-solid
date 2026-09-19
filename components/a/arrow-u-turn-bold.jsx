import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f8bnvkbmw.css';
import '../../css/k/kdbkwob-m.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="f8bnvkbmw"/><path class="kdbkwob-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-u-turn-bold"} {...others} />);
}

export default Component;
