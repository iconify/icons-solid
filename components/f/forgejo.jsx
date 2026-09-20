import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kejaeac3h.css';
import '../../css/s/sbbfclb0h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kejaeac3h"/><path class="sbbfclb0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:forgejo"} {...others} />);
}

export default Component;
