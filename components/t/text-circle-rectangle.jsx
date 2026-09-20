import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8p397xka.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k8p397xka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:text-circle-rectangle"} {...others} />);
}

export default Component;
