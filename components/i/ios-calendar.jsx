import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/reyg2abim.css';
import '../../css/j/jsk_qbbtn.css';
import '../../css/k/k6i8m5bia.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="reyg2abim"/><path class="jsk_qbbtn"/><path class="k6i8m5bia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-calendar"} {...others} />);
}

export default Component;
