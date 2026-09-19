import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lpwj95bgh.css';
import '../../css/a/ayl8drpcr.css';
import '../../css/v/v4x6_8bfa.css';
import '../../css/y/yzwlj9a5z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lpwj95bgh"/><path clip-rule="evenodd" class="ayl8drpcr"/><path class="v4x6_8bfa"/><path clip-rule="evenodd" class="yzwlj9a5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:low-income-level-24px"} {...others} />);
}

export default Component;
