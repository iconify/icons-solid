import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gp8kdlfrl.css';
import '../../css/v/ve7ymobeq.css';
import '../../css/x/xb_uqnobv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="gp8kdlfrl"/><path class="ve7ymobeq"/><path class="xb_uqnobv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:dollar-coin-1"} {...others} />);
}

export default Component;
