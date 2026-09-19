import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx7r32bwf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sx7r32bwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-arrow-round-back"} {...others} />);
}

export default Component;
