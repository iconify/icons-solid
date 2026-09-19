import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5w0p9byi.css';
import '../../css/s/sm_16-bij.css';
import '../../css/r/rpjwekbqt.css';
import '../../css/e/e6ec1d1ol.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="x5w0p9byi"/><circle class="sm_16-bij"/><path class="rpjwekbqt"/><path class="e6ec1d1ol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:cart-outline"} {...others} />);
}

export default Component;
