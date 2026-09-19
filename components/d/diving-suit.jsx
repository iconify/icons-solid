import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr36qhbyi.css';
import '../../css/z/zr7n3acyx.css';
import '../../css/c/ccpbi1pnf.css';
import '../../css/r/rwrx2052m.css';
import '../../css/c/c1wo79b4c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="tr36qhbyi"><path class="zr7n3acyx"/><path class="ccpbi1pnf"/><path class="rwrx2052m"/><path class="c1wo79b4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:diving-suit"} {...others} />);
}

export default Component;
