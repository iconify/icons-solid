import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/an5k38b2g.css';
import '../../css/q/qw0bn1uiv.css';
import '../../css/c/cpg6xjbsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="an5k38b2g"/><path clip-rule="evenodd" class="qw0bn1uiv"/><path clip-rule="evenodd" class="cpg6xjbsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:egg-cell-outline-24px"} {...others} />);
}

export default Component;
