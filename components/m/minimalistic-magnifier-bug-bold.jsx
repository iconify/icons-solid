import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-5f2htjo.css';
import '../../css/f/fmaln8b1x.css';
import '../../css/g/gjy-pevvw.css';
import '../../css/d/df_l7-bhp.css';
import '../../css/m/m06wy2bms.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x-5f2htjo"/><path class="fmaln8b1x"/><path class="gjy-pevvw"/><path class="df_l7-bhp"/><path clip-rule="evenodd" class="m06wy2bms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimalistic-magnifier-bug-bold"} {...others} />);
}

export default Component;
