import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/muvtlrodu.css';
import '../../css/m/me6q9xdxo.css';
import '../../css/t/tecn4bbqc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="muvtlrodu"/><circle class="me6q9xdxo"/><path class="tecn4bbqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:doughnut"} {...others} />);
}

export default Component;
