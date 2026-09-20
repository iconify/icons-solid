import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4d9-5bmv.css';
import '../../css/m/mad6u8jan.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p4d9-5bmv"/><path class="mad6u8jan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:american-airlines-dark"} {...others} />);
}

export default Component;
