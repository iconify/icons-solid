import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd9sx6bdy.css';
import '../../css/f/ftsxs4bzr.css';
import '../../css/d/dtxau0b4t.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/a7wynk4qy.css';
import '../../css/g/g2kigbbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xd9sx6bdy"/><path class="ftsxs4bzr"/><path class="dtxau0b4t"/><g class="xtpeb-edw"><path class="a7wynk4qy"/><path class="g2kigbbqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-library-bold-duotone"} {...others} />);
}

export default Component;
