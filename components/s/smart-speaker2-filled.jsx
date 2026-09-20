import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8km-184w.css';
import '../../css/f/fp9ai6rww.css';
import '../../css/x/x9yopfm_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="u8km-184w"/><path class="fp9ai6rww"/><path class="x9yopfm_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:smart-speaker2-filled"} {...others} />);
}

export default Component;
