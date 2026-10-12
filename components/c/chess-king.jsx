import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sw65xgb3l.css';
import '../../css/g/g5o4zccob.css';
import '../../css/s/sko61s_um.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sw65xgb3l"/><rect transform="rotate(90 19 19)" class="g5o4zccob"/><path class="sko61s_um"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chess-king"} {...others} />);
}

export default Component;
