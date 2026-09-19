import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/s/sz6vb1uxi.css';
import '../../css/r/rl8ffo9dv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="sz6vb1uxi"/><path class="rl8ffo9dv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:folder-protection"} {...others} />);
}

export default Component;
