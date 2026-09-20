import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p21c9ubxg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p21c9ubxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:pressure-high-alt"} {...others} />);
}

export default Component;
