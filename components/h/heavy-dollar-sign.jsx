import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8jxl3bzb.css';
import '../../css/b/bqmve1p5d.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="w8jxl3bzb"/><path class="bqmve1p5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:heavy-dollar-sign"} {...others} />);
}

export default Component;
