import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abk0qyhqz.css';
import '../../css/q/qail9ubgm.css';
import '../../css/x/xgb3agl1o.css';
import '../../css/g/g77xy9s8n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="abk0qyhqz"><path class="qail9ubgm"/><path class="xgb3agl1o"/><path class="g77xy9s8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:plastic-surgery"} {...others} />);
}

export default Component;
