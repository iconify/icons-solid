import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugy_83khr.css';
import '../../css/t/trs0klbtj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ugy_83khr"/><path class="trs0klbtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:procurement-48-bold"} {...others} />);
}

export default Component;
