import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/umdn2-12o.css';
import '../../css/t/tlyq4trtp.css';
import '../../css/q/q8ae85b2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="umdn2-12o"/><path clip-rule="evenodd" class="tlyq4trtp"/><path class="q8ae85b2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-money-bold"} {...others} />);
}

export default Component;
