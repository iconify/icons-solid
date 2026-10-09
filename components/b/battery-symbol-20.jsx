import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u04yhnbuz.css';
import '../../css/d/d7o5e7x9l.css';
import '../../css/p/plrml0c2l.css';
import '../../css/z/zau-730zh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u04yhnbuz"/><path class="d7o5e7x9l"/><path class="plrml0c2l"/><path class="zau-730zh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-symbol-20"} {...others} />);
}

export default Component;
