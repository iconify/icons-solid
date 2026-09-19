import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/upo3lybsw.css';
import '../../css/f/fv5ja_zgn.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="upo3lybsw"/><path clip-rule="evenodd" class="fv5ja_zgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:chip"} {...others} />);
}

export default Component;
