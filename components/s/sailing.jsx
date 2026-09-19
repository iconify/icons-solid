import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/w/wyjql0_kb.css';
import '../../css/e/er7kyvbwc.css';
import '../../css/s/s1q69fbxu.css';
import '../../css/d/djo_6or7z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="wyjql0_kb"/><path class="er7kyvbwc"/><path class="s1q69fbxu"/><path class="djo_6or7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sailing"} {...others} />);
}

export default Component;
