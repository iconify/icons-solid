import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mj475orgc.css';
import '../../css/t/th8tihb4s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mj475orgc"/><path class="th8tihb4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-cylinder-48-bold"} {...others} />);
}

export default Component;
