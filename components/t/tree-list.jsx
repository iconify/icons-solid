import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/u/uxf-74bpt.css';
import '../../css/q/q4ik7kbpj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="uxf-74bpt"/><path class="q4ik7kbpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:tree-list"} {...others} />);
}

export default Component;
