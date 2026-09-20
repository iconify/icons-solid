import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvzi1b8fa.css';
import '../../css/z/zy7040bus.css';
import '../../css/s/syhtlqbrs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kvzi1b8fa"/><path class="zy7040bus"/><path class="syhtlqbrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chart-duotone"} {...others} />);
}

export default Component;
