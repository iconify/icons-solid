import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ew9ilucbs.css';
import '../../css/z/zbfih3vdc.css';
import '../../css/e/eidr5hmca.css';
import '../../css/q/qkjxsgbny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ew9ilucbs"/><path class="zbfih3vdc"/><path class="eidr5hmca"/><path class="qkjxsgbny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:box-bold"} {...others} />);
}

export default Component;
