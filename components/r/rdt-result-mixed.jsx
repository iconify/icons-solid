import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bcfiv39na.css';
import '../../css/t/t047zkbet.css';
import '../../css/w/wa65fi0wq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="bcfiv39na"/><path clip-rule="evenodd" class="t047zkbet"/><path class="wa65fi0wq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-mixed"} {...others} />);
}

export default Component;
