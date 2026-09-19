import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wl8qihbze.css';
import '../../css/j/j2oelba8n.css';
import '../../css/f/fw48gdx3v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="wl8qihbze"/><path class="j2oelba8n"/><path class="fw48gdx3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:replay-music"} {...others} />);
}

export default Component;
