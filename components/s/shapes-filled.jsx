import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uy525wblg.css';
import '../../css/n/n70p7dbjj.css';
import '../../css/j/jhx07bbjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><circle class="uy525wblg"/><rect class="n70p7dbjj"/><path class="jhx07bbjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:shapes-filled"} {...others} />);
}

export default Component;
