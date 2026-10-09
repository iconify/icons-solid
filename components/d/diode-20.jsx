import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztcljccrf.css';
import '../../css/m/mk532_t7l.css';
import '../../css/l/lr4yiccjv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ztcljccrf"/><path class="mk532_t7l"/><path class="lr4yiccjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:diode-20"} {...others} />);
}

export default Component;
