import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xobthpb_z.css';
import '../../css/l/ld5kc0m-n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xobthpb_z"/><path class="ld5kc0m-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:arrow-forward-circle-outline"} {...others} />);
}

export default Component;
