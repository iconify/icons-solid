import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/h/h5jjrmb9v.css';
import '../../css/n/nnyeuib9r.css';
import '../../css/s/s0zjehfxn.css';
import '../../css/c/ci4g90bhz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="h5jjrmb9v"/><path clip-rule="evenodd" class="nnyeuib9r"/><path class="s0zjehfxn"/><path class="ci4g90bhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tape"} {...others} />);
}

export default Component;
