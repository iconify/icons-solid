import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3q6uacna.css';
import '../../css/h/hqmqy4c9d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v3q6uacna"/><path class="hqmqy4c9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:panel-right-48"} {...others} />);
}

export default Component;
