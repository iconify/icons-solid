import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxeqiccct.css';
import '../../css/t/t2smvv9rt.css';
import '../../css/c/cyixzxmdi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oxeqiccct"/><path class="t2smvv9rt"/><path class="cyixzxmdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:yen-48"} {...others} />);
}

export default Component;
