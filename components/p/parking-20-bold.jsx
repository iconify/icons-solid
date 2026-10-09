import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/we2agujqc.css';
import '../../css/e/eie_cccui.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="we2agujqc"/><path class="eie_cccui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:parking-20-bold"} {...others} />);
}

export default Component;
