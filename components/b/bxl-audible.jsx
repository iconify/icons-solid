import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo4xr7bel.css';
import '../../css/q/q4497hb1w.css';
import '../../css/s/s11q8obkf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qo4xr7bel"/><path class="q4497hb1w"/><path class="s11q8obkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-audible"} {...others} />);
}

export default Component;
