import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/s/sb_9ycbok.css';
import '../../css/r/rl-0a4btd.css';
import '../../css/j/j6junebmh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="sb_9ycbok"/><rect class="rl-0a4btd"/><path class="j6junebmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:order"} {...others} />);
}

export default Component;
