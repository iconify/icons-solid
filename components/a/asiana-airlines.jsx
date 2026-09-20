import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upe3u69fn.css';
import '../../css/k/kroz22bwe.css';

const viewBox = {"width":927.21,"height":333.87};
const content = `<path class="upe3u69fn"/><path class="kroz22bwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:asiana-airlines"} {...others} />);
}

export default Component;
