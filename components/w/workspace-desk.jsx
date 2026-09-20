import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lma-jno1f.css';
import '../../css/j/jvtxvhzkf.css';
import '../../css/q/q4j32bcmg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="lma-jno1f"/><path class="jvtxvhzkf"/><path class="q4j32bcmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:workspace-desk"} {...others} />);
}

export default Component;
