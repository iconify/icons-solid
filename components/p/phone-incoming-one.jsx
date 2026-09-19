import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rn8uhhj2h.css';
import '../../css/e/e-xtayzvh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="rn8uhhj2h"/><path class="e-xtayzvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:phone-incoming-one"} {...others} />);
}

export default Component;
