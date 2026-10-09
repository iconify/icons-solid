import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enr033rrc.css';
import '../../css/j/jvpc1i4ns.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="enr033rrc"/><path class="jvpc1i4ns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrows-horizontal-20-bold"} {...others} />);
}

export default Component;
