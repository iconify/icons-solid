import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/d9nebssfw.css';
import '../../css/k/kn21p-bsc.css';
import '../../css/m/m8x_zhotu.css';
import '../../css/k/ka18u3bai.css';
import '../../css/i/i-oq5ub8f.css';
import '../../css/s/sfg4-ob9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="d9nebssfw"/><path class="kn21p-bsc"/><path class="m8x_zhotu wm-shine"/><path class="ka18u3bai wm-k"/><path class="i-oq5ub8f wm-a"/><path class="sfg4-ob9o wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-bear"} {...others} />);
}

export default Component;
