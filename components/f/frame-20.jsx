import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njicu-b5r.css';
import '../../css/i/i2ndmodxq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="njicu-b5r"/><path class="i2ndmodxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frame-20"} {...others} />);
}

export default Component;
