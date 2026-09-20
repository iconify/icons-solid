import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pdo8y5idu.css';
import '../../css/y/yfiw6trca.css';
import '../../css/v/v94np1bbz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pdo8y5idu"/><path class="yfiw6trca"/><path clip-rule="evenodd" class="v94np1bbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ferris-wheel-duotone"} {...others} />);
}

export default Component;
