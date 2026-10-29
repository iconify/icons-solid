import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/odh5_uxwm.css';
import '../../css/o/ohlg0wbaj.css';
import '../../css/s/s4uk5n7uw.css';
import '../../css/h/hnxobrbrn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="odh5_uxwm"/><path class="ohlg0wbaj wm-s"/><path class="s4uk5n7uw"/><path class="hnxobrbrn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:champagne-toast-duo"} {...others} />);
}

export default Component;
