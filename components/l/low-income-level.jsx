import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xw0wsrbsy.css';
import '../../css/i/idelslp3k.css';
import '../../css/h/hj0drobtd.css';
import '../../css/j/jl4-3qb9x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xw0wsrbsy"/><path class="idelslp3k"/><path class="hj0drobtd"/><path clip-rule="evenodd" class="jl4-3qb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:low-income-level"} {...others} />);
}

export default Component;
