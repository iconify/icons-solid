import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfb5d6b_i.css';
import '../../css/b/bt4w0gb_w.css';
import '../../css/g/g40sm1q7e.css';
import '../../css/y/yf66grb3w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lfb5d6b_i"/><path class="bt4w0gb_w"/><path class="g40sm1q7e"/><path class="yf66grb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:globe-sharp"} {...others} />);
}

export default Component;
