import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fv5hqibas.css';
import '../../css/b/b1ivybqei.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fv5hqibas"/><path class="b1ivybqei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-wallet-light"} {...others} />);
}

export default Component;
