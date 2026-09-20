import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jbl2780ei.css';
import '../../css/b/b92jcf1lx.css';
import '../../css/m/mc1f7e0hh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jbl2780ei"/><path clip-rule="evenodd" class="b92jcf1lx"/><path clip-rule="evenodd" class="mc1f7e0hh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:turntable-duotone"} {...others} />);
}

export default Component;
