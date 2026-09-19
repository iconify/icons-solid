import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bm5v79neo.css';
import '../../css/q/qy7fhdaaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="bm5v79neo"/><path class="qy7fhdaaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:switch-button"} {...others} />);
}

export default Component;
