import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/w5soi7ikq.css';
import '../../css/o/o-hsaebns.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="w5soi7ikq"/><path class="o-hsaebns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:high-light"} {...others} />);
}

export default Component;
