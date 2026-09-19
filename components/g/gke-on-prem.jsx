import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjw4yqthe.css';
import '../../css/y/ylop8ebio.css';
import '../../css/s/s0fwv-0ek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sjw4yqthe"/><path class="ylop8ebio"/><path class="s0fwv-0ek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:gke-on-prem"} {...others} />);
}

export default Component;
