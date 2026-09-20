import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/dc3pinblp.css';
import '../../css/j/jqdl0qbax.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="dc3pinblp"/><path class="jqdl0qbax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:bedroom-4"} {...others} />);
}

export default Component;
