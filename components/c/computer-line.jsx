import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obl_v8k7n.css';
import '../../css/x/x69c3-r_y.css';
import '../../css/z/zxq6qwowc.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 obl_v8k7n"/><path class="clr-i-outline clr-i-outline-path-2 x69c3-r_y"/><path class="clr-i-outline clr-i-outline-path-3 zxq6qwowc"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:computer-line"} {...others} />);
}

export default Component;
