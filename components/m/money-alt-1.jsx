import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/kwpmoib5n.css';
import '../../css/j/jpp7lr3ew.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="kwpmoib5n"/><path class="jpp7lr3ew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:money-alt-1"} {...others} />);
}

export default Component;
