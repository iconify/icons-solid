import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azt4s9ayv.css';
import '../../css/n/n1b9jrbgq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="azt4s9ayv"/><path class="n1b9jrbgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:folo"} {...others} />);
}

export default Component;
