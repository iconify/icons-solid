import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcuxoi32t.css';
import '../../css/r/r-j6oub_k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qcuxoi32t"/><path class="r-j6oub_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevrons-up-48"} {...others} />);
}

export default Component;
