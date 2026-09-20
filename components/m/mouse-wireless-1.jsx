import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/qq-kjr96t.css';
import '../../css/j/jrlpapbzu.css';
import '../../css/n/nl7l0ib6w.css';
import '../../css/l/lpd03ybdm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="qq-kjr96t"/><path class="jrlpapbzu"/><path class="nl7l0ib6w"/><path class="lpd03ybdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:mouse-wireless-1"} {...others} />);
}

export default Component;
