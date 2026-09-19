import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/f/f84ytrb9b.css';
import '../../css/w/wuekglbtb.css';
import '../../css/n/nr88iab2w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="f84ytrb9b"/><path class="wuekglbtb"/><path class="nr88iab2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:command"} {...others} />);
}

export default Component;
