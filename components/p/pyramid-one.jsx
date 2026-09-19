import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/zpx81xb2i.css';
import '../../css/r/ryglj117i.css';
import '../../css/a/af6uu_9jb.css';
import '../../css/m/m6tuhniei.css';
import '../../css/d/dxmr7xahg.css';
import '../../css/c/cud-6eb5s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path clip-rule="evenodd" class="zpx81xb2i"/><path class="ryglj117i"/><path class="af6uu_9jb"/><path class="m6tuhniei"/><path class="dxmr7xahg"/><path class="cud-6eb5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pyramid-one"} {...others} />);
}

export default Component;
