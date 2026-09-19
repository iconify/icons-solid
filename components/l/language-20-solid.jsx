import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g4y3_-fhy.css';
import '../../css/c/c-smvsb3r.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="g4y3_-fhy"/><path clip-rule="evenodd" class="c-smvsb3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:language-20-solid"} {...others} />);
}

export default Component;
