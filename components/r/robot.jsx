import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqg85fbuk.css';
import '../../css/e/e-sveq-za.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vqg85fbuk"/><circle class="e-sveq-za"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:robot"} {...others} />);
}

export default Component;
