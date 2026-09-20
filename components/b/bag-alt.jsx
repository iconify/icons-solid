import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/aog5oe-iz.css';
import '../../css/a/arge4fc6b.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="aog5oe-iz"/><path class="arge4fc6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:bag-alt"} {...others} />);
}

export default Component;
