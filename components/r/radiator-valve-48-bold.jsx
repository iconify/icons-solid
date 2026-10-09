import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ku9n4pj_o.css';
import '../../css/j/j8mi95bft.css';
import '../../css/u/u35e7_b0b.css';
import '../../css/d/d6cvwtbsp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ku9n4pj_o"/><path class="j8mi95bft"/><path class="u35e7_b0b"/><path class="d6cvwtbsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:radiator-valve-48-bold"} {...others} />);
}

export default Component;
