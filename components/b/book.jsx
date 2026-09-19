import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vt1-he07e.css';
import '../../css/c/cczcib67m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="vt1-he07e"/><path clip-rule="evenodd" class="cczcib67m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:book"} {...others} />);
}

export default Component;
