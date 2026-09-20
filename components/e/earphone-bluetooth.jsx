import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/e2ipfhhai.css';
import '../../css/v/vr7yxqblp.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="e2ipfhhai"/><path class="vr7yxqblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:earphone-bluetooth"} {...others} />);
}

export default Component;
