import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5z7agb-i.css';
import '../../css/l/lrw892zbj.css';
import '../../css/l/l89bje-3m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d5z7agb-i"/><path class="lrw892zbj"/><path class="l89bje-3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-trailer-48"} {...others} />);
}

export default Component;
