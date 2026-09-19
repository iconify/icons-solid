import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/y/ylwwzra0i.css';
import '../../css/r/rpdkp3b1y.css';
import '../../css/e/euvpd1bsq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ylwwzra0i"/><path class="rpdkp3b1y"/><path class="euvpd1bsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:gift"} {...others} />);
}

export default Component;
