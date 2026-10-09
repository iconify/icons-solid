import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdfjzcrhz.css';
import '../../css/i/iyeej1bps.css';
import '../../css/v/vageni_ng.css';
import '../../css/c/cdv2l9bka.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kdfjzcrhz"/><path class="iyeej1bps"/><path class="vageni_ng"/><path class="cdv2l9bka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-pipeline-20"} {...others} />);
}

export default Component;
