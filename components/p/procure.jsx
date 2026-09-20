import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4dijcbab.css';
import '../../css/c/c5p0drbtm.css';
import '../../css/w/wnav2ee8p.css';

const viewBox = {"width":69.2,"height":108.3};
const content = `<path class="l4dijcbab"/><path class="c5p0drbtm"/><path class="wnav2ee8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:procure"} {...others} />);
}

export default Component;
