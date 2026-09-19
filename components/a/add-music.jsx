import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bqzj_jbnn.css';
import '../../css/f/f6px4o6ug.css';
import '../../css/q/qmo-ysovi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="bqzj_jbnn"/><path class="f6px4o6ug"/><path class="qmo-ysovi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:add-music"} {...others} />);
}

export default Component;
