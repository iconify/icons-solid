import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sriywhbqy.css';
import '../../css/k/ka2bqebxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="sriywhbqy"/><path clip-rule="evenodd" class="ka2bqebxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:watch-expressive"} {...others} />);
}

export default Component;
