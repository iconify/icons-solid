import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uchecvbgp.css';
import '../../css/s/sryd7gbuc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uchecvbgp"/><path class="sryd7gbuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gear-48-bold"} {...others} />);
}

export default Component;
