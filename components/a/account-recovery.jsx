import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/umi_lsbuk.css';
import '../../css/r/r93eu13-n.css';
import '../../css/r/ryl82g88k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="umi_lsbuk"/><path class="r93eu13-n"/><path class="ryl82g88k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:account-recovery"} {...others} />);
}

export default Component;
