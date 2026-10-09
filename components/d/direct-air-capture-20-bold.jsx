import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0slpkheq.css';
import '../../css/s/s4f33q37b.css';
import '../../css/h/h7ugrt8_h.css';
import '../../css/r/r3ilnul-s.css';
import '../../css/d/dovr-4bla.css';
import '../../css/j/j56woiy5h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x0slpkheq"/><path class="s4f33q37b"/><path class="h7ugrt8_h"/><path class="r3ilnul-s"/><path class="dovr-4bla"/><path class="j56woiy5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:direct-air-capture-20-bold"} {...others} />);
}

export default Component;
