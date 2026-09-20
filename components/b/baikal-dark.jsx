import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq3xmi0yu.css';
import '../../css/n/nvqrqlbpx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uq3xmi0yu"/><path class="nvqrqlbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:baikal-dark"} {...others} />);
}

export default Component;
