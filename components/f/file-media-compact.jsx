import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hsw04lgqz.css';
import '../../css/q/qviu0dxdv.css';
import '../../css/m/mm1rimbuj.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><path class="hsw04lgqz"/><path clip-rule="evenodd" class="qviu0dxdv"/><path clip-rule="evenodd" class="mm1rimbuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:file-media-compact"} {...others} />);
}

export default Component;
