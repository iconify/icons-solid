import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mjmqxhm0l.css';
import '../../css/q/q9kqmfbac.css';
import '../../css/y/ywgkucriq.css';
import '../../css/l/ltcy76bjp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="mjmqxhm0l"/><path class="q9kqmfbac"/><path class="ywgkucriq"/><path class="ltcy76bjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:drum-stick"} {...others} />);
}

export default Component;
