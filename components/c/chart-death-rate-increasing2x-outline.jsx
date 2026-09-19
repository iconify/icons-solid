import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8fgq83jj.css';
import '../../css/p/ptgid_4ay.css';
import '../../css/m/m89qgbkka.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z8fgq83jj"/><path clip-rule="evenodd" class="ptgid_4ay"/><path class="m89qgbkka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chart-death-rate-increasing2x-outline"} {...others} />);
}

export default Component;
