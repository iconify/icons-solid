import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3p79uh_k.css';
import '../../css/h/h68tk6bxc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b3p79uh_k"/><path class="h68tk6bxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:zoraxy"} {...others} />);
}

export default Component;
