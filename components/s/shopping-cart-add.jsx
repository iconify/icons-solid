import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d0fm-7m6y.css';
import '../../css/j/j60tq1rjw.css';
import '../../css/z/zksv7j5ng.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="d0fm-7m6y"/><path class="j60tq1rjw"/><path class="zksv7j5ng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:shopping-cart-add"} {...others} />);
}

export default Component;
