import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z22c6ybkz.css';
import '../../css/x/xmr7_lblt.css';
import '../../css/m/mi661mi7p.css';
import '../../css/m/mk7wn8hfw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z22c6ybkz"/><path class="xmr7_lblt"/><path class="mi661mi7p"/><path class="mk7wn8hfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-cooker-20"} {...others} />);
}

export default Component;
