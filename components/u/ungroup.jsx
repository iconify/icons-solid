import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/whb2y76-d.css';
import '../../css/y/yn551zh7z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="whb2y76-d"/><path class="yn551zh7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:ungroup"} {...others} />);
}

export default Component;
