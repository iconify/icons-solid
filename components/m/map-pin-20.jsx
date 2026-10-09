import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9cx5cc5b.css';
import '../../css/l/lmjbu-ywi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f9cx5cc5b"/><path class="lmjbu-ywi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-pin-20"} {...others} />);
}

export default Component;
