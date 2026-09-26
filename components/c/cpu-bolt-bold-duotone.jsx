import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/caqoh7b2t.css';
import '../../css/p/priyyfbwu.css';
import '../../css/n/nqbzucyig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="caqoh7b2t"/><path class="priyyfbwu"/><path clip-rule="evenodd" class="nqbzucyig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cpu-bolt-bold-duotone"} {...others} />);
}

export default Component;
