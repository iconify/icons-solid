import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/n/n2qflgbqh.css';
import '../../css/f/f0ql7tbff.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="n2qflgbqh"/><path class="f0ql7tbff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:document-folder"} {...others} />);
}

export default Component;
