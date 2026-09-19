import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/y/yir80ubeq.css';
import '../../css/r/ru2cwghdw.css';
import '../../css/i/i65qn8syi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path clip-rule="evenodd" class="yir80ubeq"/><path class="ru2cwghdw"/><path class="i65qn8syi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:contrast-view-circle"} {...others} />);
}

export default Component;
