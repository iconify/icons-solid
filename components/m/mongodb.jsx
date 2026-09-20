import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-08wh0_j.css';
import '../../css/v/vnuucwq6l.css';
import '../../css/s/s7cf2jbnd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s-08wh0_j"/><path class="vnuucwq6l"/><path class="s7cf2jbnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mongodb"} {...others} />);
}

export default Component;
