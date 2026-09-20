import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/cmhv15bys.css';
import '../../css/k/k7_9x0bee.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="cmhv15bys"/><path class="k7_9x0bee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pet-paw"} {...others} />);
}

export default Component;
