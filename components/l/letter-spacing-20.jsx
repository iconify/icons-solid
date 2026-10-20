import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq0yvabzs.css';
import '../../css/u/ura9qubce.css';
import '../../css/u/ufqapwbyp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jq0yvabzs"/><path class="ura9qubce"/><path class="ufqapwbyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:letter-spacing-20"} {...others} />);
}

export default Component;
