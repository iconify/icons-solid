import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_chcnbrk.css';
import '../../css/s/su39-7f4f.css';
import '../../css/a/at1ai5bbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="d_chcnbrk"/><path class="su39-7f4f"/><path clip-rule="evenodd" class="at1ai5bbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:trash3-duotone"} {...others} />);
}

export default Component;
