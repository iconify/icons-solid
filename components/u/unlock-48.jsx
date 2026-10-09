import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6deh2baw.css';
import '../../css/c/cq41npglk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q6deh2baw"/><path class="cq41npglk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:unlock-48"} {...others} />);
}

export default Component;
