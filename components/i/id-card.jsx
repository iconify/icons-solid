import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5p2s1bwc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u5p2s1bwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:id-card"} {...others} />);
}

export default Component;
