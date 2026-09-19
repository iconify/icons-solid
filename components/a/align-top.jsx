import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/p/pi2aatppd.css';
import '../../css/y/y7o7wybuc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="pi2aatppd"/><path class="y7o7wybuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:align-top"} {...others} />);
}

export default Component;
