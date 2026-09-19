import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ema3-69dv.css';
import '../../css/q/qcb-z1bpl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ema3-69dv"/><path class="qcb-z1bpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:accessibility"} {...others} />);
}

export default Component;
