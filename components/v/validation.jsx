import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qipksitfu.css';
import '../../css/t/tino3_b6l.css';
import '../../css/v/v1gkmbc8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qipksitfu"/><path class="tino3_b6l"/><path class="v1gkmbc8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:validation"} {...others} />);
}

export default Component;
