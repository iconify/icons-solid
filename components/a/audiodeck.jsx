import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/puwug5bgg.css';
import '../../css/h/ht9cs5buy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="puwug5bgg"/><path class="ht9cs5buy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:audiodeck"} {...others} />);
}

export default Component;
