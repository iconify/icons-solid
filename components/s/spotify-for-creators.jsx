import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_kk64s-x.css';
import '../../css/p/p_p4lxbry.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x_kk64s-x"/><path class="p_p4lxbry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:spotify-for-creators"} {...others} />);
}

export default Component;
