import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhqdfsbas.css';
import '../../css/l/l8vyo8zlh.css';
import '../../css/e/e_kkwobnq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fhqdfsbas"/><path class="l8vyo8zlh"/><path class="e_kkwobnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:parallel-tasks"} {...others} />);
}

export default Component;
