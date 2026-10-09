import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h09i3hbzu.css';
import '../../css/q/q_dqg26dw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h09i3hbzu"/><path class="q_dqg26dw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevrons-left-48"} {...others} />);
}

export default Component;
