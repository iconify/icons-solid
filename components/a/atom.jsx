import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tt5r9db4o.css';
import '../../css/m/myr3ywb_t.css';
import '../../css/i/ir-y7_huw.css';
import '../../css/h/hfw3qg2gr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="tt5r9db4o"/><path class="myr3ywb_t"/><path class="ir-y7_huw"/><path class="hfw3qg2gr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:atom"} {...others} />);
}

export default Component;
