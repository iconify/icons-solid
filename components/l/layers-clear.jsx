import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8jnr3b2p.css';

const viewBox = {"width":432,"height":440};
const content = `<path class="n8jnr3b2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:layers-clear"} {...others} />);
}

export default Component;
