import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or1v_l28y.css';
import '../../css/m/mhnbjolts.css';
import '../../css/p/pfqjkwvxq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="or1v_l28y"/><path class="mhnbjolts"/><path class="pfqjkwvxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:headset-sparkle-stroke-20"} {...others} />);
}

export default Component;
