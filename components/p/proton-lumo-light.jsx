import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjdhlo7vy.css';
import '../../css/a/atca9c2ie.css';
import '../../css/s/s9wdzbc7g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vjdhlo7vy"/><path class="atca9c2ie"/><path class="s9wdzbc7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-lumo-light"} {...others} />);
}

export default Component;
