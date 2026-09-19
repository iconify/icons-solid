import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t8j7pye4j.css';
import '../../css/e/eti5lpb6m.css';
import '../../css/z/zvv3e7qfb.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="t8j7pye4j"/><path class="eti5lpb6m"/><path class="zvv3e7qfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:shuffle"} {...others} />);
}

export default Component;
