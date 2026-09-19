import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/oan152bkl.css';
import '../../css/h/h2l1adcfc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="oan152bkl"/><path class="h2l1adcfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:chart-line-area"} {...others} />);
}

export default Component;
