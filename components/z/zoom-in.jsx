import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/c13q-1-6o.css';
import '../../css/n/npbdvbd7h.css';
import '../../css/x/xnydgsbih.css';
import '../../css/r/rij50zbkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="c13q-1-6o"/><path class="npbdvbd7h"/><path class="xnydgsbih"/><path class="rij50zbkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:zoom-in"} {...others} />);
}

export default Component;
