import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3rxcpkug.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q3rxcpkug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:price-tag"} {...others} />);
}

export default Component;
