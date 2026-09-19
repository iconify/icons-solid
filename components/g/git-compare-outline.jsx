import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yn8l_w7lg.css';
import '../../css/o/ovur0mx_t.css';
import '../../css/t/tukbs_u6b.css';
import '../../css/t/twvlgd5yp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yn8l_w7lg"/><circle class="ovur0mx_t"/><circle class="tukbs_u6b"/><path class="twvlgd5yp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:git-compare-outline"} {...others} />);
}

export default Component;
