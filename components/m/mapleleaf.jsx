import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha8_tdyso.css';
import '../../css/r/r0ghz7b6h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ha8_tdyso"/><path class="r0ghz7b6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:mapleleaf"} {...others} />);
}

export default Component;
