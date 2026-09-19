import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l9loqrvgk.css';
import '../../css/t/tmh83rwbo.css';
import '../../css/p/p97oy8mpb.css';

const viewBox = {"width":38,"height":32};
const content = `<g class="cuyn6tgcc"><path class="l9loqrvgk"/><path class="tmh83rwbo"/><circle class="p97oy8mpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:wallet"} {...others} />);
}

export default Component;
