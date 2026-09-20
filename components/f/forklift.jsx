import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/n0g6jmbfy.css';
import '../../css/d/d_ofrbb7y.css';
import '../../css/p/pfnt1nf9l.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="n0g6jmbfy"/><path class="d_ofrbb7y"/><path class="pfnt1nf9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:forklift"} {...others} />);
}

export default Component;
