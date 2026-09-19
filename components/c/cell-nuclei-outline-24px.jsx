import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujnmrgbfw.css';
import '../../css/h/huar3gjey.css';
import '../../css/q/q8diyxbms.css';
import '../../css/k/kxoro6bup.css';
import '../../css/r/ro--2acxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ujnmrgbfw"/><path clip-rule="evenodd" class="huar3gjey"/><path class="q8diyxbms"/><path clip-rule="evenodd" class="kxoro6bup"/><path clip-rule="evenodd" class="ro--2acxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cell-nuclei-outline-24px"} {...others} />);
}

export default Component;
