import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5llwvbom.css';
import '../../css/z/z9zjvabag.css';
import '../../css/r/r1bpb3k0n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g5llwvbom"/><path class="z9zjvabag"/><path class="r1bpb3k0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:download-48-bold"} {...others} />);
}

export default Component;
