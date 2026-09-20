import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/azeq84zvv.css';
import '../../css/m/mponw-bea.css';
import '../../css/w/w7g4r3epk.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="azeq84zvv"/><path clip-rule="evenodd" class="mponw-bea"/><path class="w7g4r3epk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:file-off"} {...others} />);
}

export default Component;
