import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu2vshdfm.css';
import '../../css/c/ctjzoy1eo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qu2vshdfm"/><path class="ctjzoy1eo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:semi-detached-48"} {...others} />);
}

export default Component;
