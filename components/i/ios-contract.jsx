import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2_axxtyj.css';
import '../../css/l/le9wl1t5r.css';
import '../../css/h/how4y_5ly.css';
import '../../css/x/xyb0mqbel.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r2_axxtyj"/><path class="le9wl1t5r"/><path class="how4y_5ly"/><path class="xyb0mqbel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-contract"} {...others} />);
}

export default Component;
