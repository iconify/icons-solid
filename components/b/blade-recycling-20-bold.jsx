import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g41iklb0r.css';
import '../../css/t/tbd4cl6-p.css';
import '../../css/x/xak4i3mwu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g41iklb0r"/><path class="tbd4cl6-p"/><path class="xak4i3mwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blade-recycling-20-bold"} {...others} />);
}

export default Component;
