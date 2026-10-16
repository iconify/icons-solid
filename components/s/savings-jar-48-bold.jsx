import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd5r3x2_e.css';
import '../../css/b/b4h63gpfv.css';
import '../../css/c/c5l9tbr2k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xd5r3x2_e"/><path class="b4h63gpfv"/><path class="c5l9tbr2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:savings-jar-48-bold"} {...others} />);
}

export default Component;
