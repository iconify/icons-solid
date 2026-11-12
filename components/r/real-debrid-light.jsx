import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_0hbyvso.css';
import '../../css/s/ssv2g6b4g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c_0hbyvso"/><path class="ssv2g6b4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:real-debrid-light"} {...others} />);
}

export default Component;
