import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jg_pxf01i.css';
import '../../css/r/ri-rz2_my.css';
import '../../css/y/yy3626ess.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jg_pxf01i"/><path class="ri-rz2_my"/><path clip-rule="evenodd" class="yy3626ess"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:panda"} {...others} />);
}

export default Component;
