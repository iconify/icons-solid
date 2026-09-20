import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ootwnmxuy.css';
import '../../css/e/eyn1tubqg.css';
import '../../css/g/g68tbfbgg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ootwnmxuy"/><path class="eyn1tubqg"/><path class="g68tbfbgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mailbox-bold"} {...others} />);
}

export default Component;
