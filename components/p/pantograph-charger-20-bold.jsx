import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_lk9b4if.css';
import '../../css/u/umtogunmc.css';
import '../../css/h/hn809pbis.css';
import '../../css/r/rwijq70ik.css';
import '../../css/d/d52p5b9je.css';
import '../../css/s/s41nvl81r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j_lk9b4if"/><path class="umtogunmc"/><path class="hn809pbis"/><path class="rwijq70ik"/><path class="d52p5b9je"/><path class="s41nvl81r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pantograph-charger-20-bold"} {...others} />);
}

export default Component;
