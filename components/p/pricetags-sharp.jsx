import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udf6_wwmv.css';
import '../../css/l/lizw1zvth.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="udf6_wwmv"/><path class="lizw1zvth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:pricetags-sharp"} {...others} />);
}

export default Component;
