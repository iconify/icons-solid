import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/v/v8eagnupx.css';
import '../../css/o/o2jheybdw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="v8eagnupx"/><path class="o2jheybdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:plug"} {...others} />);
}

export default Component;
