import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxz6df3mx.css';
import '../../css/d/dg0y8obci.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bxz6df3mx"/><path class="dg0y8obci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:qd-light"} {...others} />);
}

export default Component;
