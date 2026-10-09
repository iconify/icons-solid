import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cs6pf8bqr.css';
import '../../css/r/rtbfcmafp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cs6pf8bqr"/><path class="rtbfcmafp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:generator-20"} {...others} />);
}

export default Component;
