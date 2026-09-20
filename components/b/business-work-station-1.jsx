import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iq6f2zwqf.css';
import '../../css/f/fh9ktfbuv.css';
import '../../css/z/zkcwijbin.css';
import '../../css/g/g-ema6bgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iq6f2zwqf"/><path class="fh9ktfbuv"/><path class="zkcwijbin"/><path class="g-ema6bgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:business-work-station-1"} {...others} />);
}

export default Component;
