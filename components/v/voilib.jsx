import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idb1z9zzg.css';
import '../../css/k/kyzfwv8lz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="idb1z9zzg"/><path class="kyzfwv8lz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:voilib"} {...others} />);
}

export default Component;
