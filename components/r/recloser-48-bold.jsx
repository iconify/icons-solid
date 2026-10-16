import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c876zybxx.css';
import '../../css/t/tp2ceobty.css';
import '../../css/h/h3cp2fcos.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c876zybxx"/><path class="tp2ceobty"/><path class="h3cp2fcos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:recloser-48-bold"} {...others} />);
}

export default Component;
