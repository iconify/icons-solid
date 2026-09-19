import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/f/f16ta9bil.css';
import '../../css/d/djo_6or7z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="f16ta9bil"/><path class="djo_6or7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sailing"} {...others} />);
}

export default Component;
