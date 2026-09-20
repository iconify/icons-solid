import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bk_y2-bpv.css';
import '../../css/k/k7rs5ub2m.css';
import '../../css/b/ba7212etj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bk_y2-bpv"/><path class="k7rs5ub2m"/><path class="ba7212etj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yabin"} {...others} />);
}

export default Component;
