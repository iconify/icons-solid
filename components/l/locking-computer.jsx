import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fn--mg62j.css';
import '../../css/y/y61x13bxi.css';
import '../../css/d/diy27cbzf.css';
import '../../css/v/vfmc-6bme.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="fn--mg62j"/><rect class="y61x13bxi"/><path class="diy27cbzf"/><path class="vfmc-6bme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:locking-computer"} {...others} />);
}

export default Component;
