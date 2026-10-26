import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/s/s5_irp_bf.css';
import '../../css/x/x_1kjjybt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="s5_irp_bf"/><path class="x_1kjjybt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:eye"} {...others} />);
}

export default Component;
