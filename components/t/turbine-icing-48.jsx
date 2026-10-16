import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjz_t6bds.css';
import '../../css/q/q4r8_6iob.css';
import '../../css/t/t100656sa.css';
import '../../css/v/vfuw7m6dq.css';
import '../../css/b/bdof1db3i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gjz_t6bds"/><path class="q4r8_6iob"/><path class="t100656sa"/><path class="vfuw7m6dq"/><path class="bdof1db3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:turbine-icing-48"} {...others} />);
}

export default Component;
