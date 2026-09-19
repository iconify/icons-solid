import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/u/utd7jvywi.css';
import '../../css/z/ze8hslbqf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="utd7jvywi"/><path class="ze8hslbqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:rectangle-x"} {...others} />);
}

export default Component;
