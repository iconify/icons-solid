import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wduvy1bau.css';
import '../../css/y/yqkq0p36x.css';
import '../../css/i/i4wkegb-l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="wduvy1bau"/><path class="yqkq0p36x"/><path class="i4wkegb-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:mail"} {...others} />);
}

export default Component;
