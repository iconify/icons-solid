import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/odz5yibcn.css';
import '../../css/j/j-yb9dbtx.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="odz5yibcn"/><path class="j-yb9dbtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:money-bag"} {...others} />);
}

export default Component;
