import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idor_ft_x.css';
import '../../css/l/lvq87sbsr.css';
import '../../css/s/shf-fjbpf.css';
import '../../css/k/ktlo4mbqx.css';
import '../../css/r/rilmpj5mj.css';
import '../../css/l/l_lk69tib.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 idor_ft_x"/><path class="clr-i-outline clr-i-outline-path-2 lvq87sbsr"/><path class="clr-i-outline clr-i-outline-path-3 shf-fjbpf"/><path class="clr-i-outline clr-i-outline-path-4 ktlo4mbqx"/><path class="clr-i-outline clr-i-outline-path-5 rilmpj5mj"/><path class="clr-i-outline clr-i-outline-path-6 l_lk69tib"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:memory-line"} {...others} />);
}

export default Component;
