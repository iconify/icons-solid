import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejvznyb1y.css';
import '../../css/n/n939ot_sz.css';
import '../../css/z/z5v2t66tz.css';
import '../../css/o/op7ye5b9r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 ejvznyb1y"/><path class="clr-i-outline clr-i-outline-path-2 n939ot_sz"/><path class="clr-i-outline clr-i-outline-path-3 z5v2t66tz"/><path class="clr-i-outline clr-i-outline-path-4 op7ye5b9r"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:e-check-line"} {...others} />);
}

export default Component;
