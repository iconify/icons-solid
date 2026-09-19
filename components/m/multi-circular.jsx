import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/d/dudy4jk-t.css';
import '../../css/a/ag4pj_bcs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="vkcj4bcdm"/><path class="dudy4jk-t"/><path class="ag4pj_bcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:multi-circular"} {...others} />);
}

export default Component;
