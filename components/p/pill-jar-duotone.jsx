import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/poex70sae.css';
import '../../css/i/i2jxr-95a.css';
import '../../css/u/uw1l7ac0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="poex70sae"/><path class="i2jxr-95a"/><path clip-rule="evenodd" class="uw1l7ac0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pill-jar-duotone"} {...others} />);
}

export default Component;
