import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvtzd3b0t.css';
import '../../css/l/llds493te.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="zvtzd3b0t"/><path class="llds493te"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:calendar-number-outline"} {...others} />);
}

export default Component;
