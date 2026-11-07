import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfw_9ua0h.css';
import '../../css/e/edzem2_sz.css';
import '../../css/t/t9lxmlx8r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hfw_9ua0h"/><path class="edzem2_sz"/><path class="t9lxmlx8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volleyball-2-bold-duotone"} {...others} />);
}

export default Component;
