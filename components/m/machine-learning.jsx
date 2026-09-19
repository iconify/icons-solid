import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5xt_g81n.css';
import '../../css/y/ysmbq7bxl.css';
import '../../css/d/d79oyzb2x.css';
import '../../css/d/d1ym2h3ya.css';
import '../../css/r/rd_oh8biv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x5xt_g81n"/><path class="ysmbq7bxl"/><circle class="d79oyzb2x"/><circle class="d1ym2h3ya"/><path class="rd_oh8biv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:machine-learning"} {...others} />);
}

export default Component;
