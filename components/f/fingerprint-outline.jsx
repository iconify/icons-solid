import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgl83sa6b.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rgl83sa6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:fingerprint-outline"} {...others} />);
}

export default Component;
