import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyv7au0jr.css';
import '../../css/x/xn30xyltc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hyv7au0jr"/><path clip-rule="evenodd" class="xn30xyltc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:linux-solid"} {...others} />);
}

export default Component;
