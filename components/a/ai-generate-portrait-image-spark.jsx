import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/p/p-3ux2bck.css';
import '../../css/j/jmqcvacjt.css';
import '../../css/u/u8k8dlbfz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="p-3ux2bck"/><path class="jmqcvacjt"/><path class="u8k8dlbfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ai-generate-portrait-image-spark"} {...others} />);
}

export default Component;
