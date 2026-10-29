import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s4uk5n7uw.css';
import '../../css/h/hnxobrbrn.css';
import '../../css/o/ohlg0wbaj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="s4uk5n7uw"/><path class="hnxobrbrn wm-a"/><path class="ohlg0wbaj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:champagne-toast"} {...others} />);
}

export default Component;
