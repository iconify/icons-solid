import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztgw17b4p.css';
import '../../css/l/laiy7fbkf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ztgw17b4p"/><path class="laiy7fbkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:chart-increasing-with-yen"} {...others} />);
}

export default Component;
