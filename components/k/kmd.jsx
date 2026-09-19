import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hx_x1u4zp.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/i/i89cnpc-t.css';
import '../../css/i/i9h0qubza.css';

const viewBox = {"width":96,"height":96};
const content = `<g class="ft5dv1b6b"><path class="hx_x1u4zp"/><g class="n1mjunbsu"><path class="i89cnpc-t"/><path class="i9h0qubza"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:kmd"} {...others} />);
}

export default Component;
