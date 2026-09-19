import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/i/ivjdqkb4i.css';
import '../../css/r/rpgbrbc4i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ivjdqkb4i"/><path class="rpgbrbc4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:ghost"} {...others} />);
}

export default Component;
