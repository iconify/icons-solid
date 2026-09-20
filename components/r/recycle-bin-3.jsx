import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/qwpypq29d.css';
import '../../css/o/oe9dx3b7y.css';
import '../../css/n/n-4rrsbgb.css';
import '../../css/t/tyz-vebqv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="qwpypq29d"/><path class="oe9dx3b7y"/><path class="n-4rrsbgb"/><path class="tyz-vebqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:recycle-bin-3"} {...others} />);
}

export default Component;
