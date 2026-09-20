import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/nudoueb7n.css';
import '../../css/u/uu4tkm2-w.css';
import '../../css/o/oa4x40bhk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="nudoueb7n"/><path class="uu4tkm2-w"/><path class="oa4x40bhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:piggy-bank"} {...others} />);
}

export default Component;
