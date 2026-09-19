import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/ov0kbmosh.css';
import '../../css/z/zqpa_ob9q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ov0kbmosh"/><path class="zqpa_ob9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:folder-minus"} {...others} />);
}

export default Component;
