import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/ex6orob3n.css';
import '../../css/c/c68l9tbcy.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="ex6orob3n"/><path class="c68l9tbcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:backward-2"} {...others} />);
}

export default Component;
