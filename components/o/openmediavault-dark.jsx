import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usmd_2bpb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="usmd_2bpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openmediavault-dark"} {...others} />);
}

export default Component;
