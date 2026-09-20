import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c7cpj85dq.css';
import '../../css/f/fgfn1dwmu.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="c7cpj85dq"/><path class="fgfn1dwmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:earphone"} {...others} />);
}

export default Component;
