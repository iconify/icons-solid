import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/nmg33_t6b.css';
import '../../css/j/jr7i7-b9x.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="nmg33_t6b"/><path class="jr7i7-b9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:baby-crib-2"} {...others} />);
}

export default Component;
