import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/z36vppbrp.css';
import '../../css/r/r7kylibfa.css';
import '../../css/k/knr7kda6q.css';
import '../../css/b/btbutb-jz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="z36vppbrp"/><path class="r7kylibfa"/><path class="knr7kda6q"/><path class="btbutb-jz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ice-cream-2"} {...others} />);
}

export default Component;
