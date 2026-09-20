import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/awpepgb2e.css';
import '../../css/i/imy59jyxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="awpepgb2e"/><path clip-rule="evenodd" class="imy59jyxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:unlock-active"} {...others} />);
}

export default Component;
