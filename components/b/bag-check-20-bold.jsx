import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kg1pd4bom.css';
import '../../css/v/vqn056b1i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kg1pd4bom"/><path class="vqn056b1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bag-check-20-bold"} {...others} />);
}

export default Component;
