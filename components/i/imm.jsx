import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eroup8bby.css';
import '../../css/s/sqkmwdbyf.css';
import '../../css/h/hy03qtb1b.css';
import '../../css/u/uh2h54m8i.css';
import '../../css/w/wi8hi9iwd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="eroup8bby"/><path clip-rule="evenodd" class="sqkmwdbyf"/><path class="hy03qtb1b"/><path clip-rule="evenodd" class="uh2h54m8i"/><path clip-rule="evenodd" class="wi8hi9iwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:imm"} {...others} />);
}

export default Component;
