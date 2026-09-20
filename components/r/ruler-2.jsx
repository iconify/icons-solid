import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/i7h008b7q.css';
import '../../css/e/e85a2s-wb.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="i7h008b7q"/><path class="e85a2s-wb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:ruler-2"} {...others} />);
}

export default Component;
