import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3recgbof.css';
import '../../css/d/dqdy3itdg.css';
import '../../css/e/etnb34u3l.css';

const viewBox = {"width":210,"height":43.08};
const content = `<g class="q3recgbof"><path class="dqdy3itdg"/><path class="etnb34u3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:intelbras"} {...others} />);
}

export default Component;
