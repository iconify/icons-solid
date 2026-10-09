import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfhe1nbee.css';
import '../../css/v/vli-k3xmw.css';
import '../../css/l/lgsu85z6r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wfhe1nbee"/><path class="vli-k3xmw"/><path class="lgsu85z6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shuffle-20"} {...others} />);
}

export default Component;
