import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8l9hqbrf.css';
import '../../css/n/nz0jllbgo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k8l9hqbrf"/><path class="nz0jllbgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:saltcorn-light"} {...others} />);
}

export default Component;
