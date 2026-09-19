import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wz99rl-4z.css';
import '../../css/r/rlyoxbbqo.css';
import '../../css/e/e7i9vlb7g.css';
import '../../css/e/enydk0bnc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="wz99rl-4z"/><rect class="rlyoxbbqo"/><path class="e7i9vlb7g"/><path class="enydk0bnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:telescope"} {...others} />);
}

export default Component;
