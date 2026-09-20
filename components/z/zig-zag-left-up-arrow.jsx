import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/mudhp9b9u.css';
import '../../css/l/l1be-5b8y.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="mudhp9b9u"/><path class="l1be-5b8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:zig-zag-left-up-arrow"} {...others} />);
}

export default Component;
