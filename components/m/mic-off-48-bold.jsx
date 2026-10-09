import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isr_8i8ag.css';
import '../../css/t/tp3yspbee.css';
import '../../css/p/phox42bnd.css';
import '../../css/p/p23qiccjb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="isr_8i8ag"/><path class="tp3yspbee"/><path class="phox42bnd"/><path class="p23qiccjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mic-off-48-bold"} {...others} />);
}

export default Component;
