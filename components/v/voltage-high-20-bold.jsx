import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2eib-bha.css';
import '../../css/g/gsrfvdbyy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o2eib-bha"/><path class="gsrfvdbyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voltage-high-20-bold"} {...others} />);
}

export default Component;
