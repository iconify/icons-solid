import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwtc_9b7s.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="mwtc_9b7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mikemurphyai-dark"} {...others} />);
}

export default Component;
