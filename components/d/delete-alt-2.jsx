import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jhiz4hztw.css';
import '../../css/p/priy_abib.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="jhiz4hztw"/><path class="priy_abib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:delete-alt-2"} {...others} />);
}

export default Component;
