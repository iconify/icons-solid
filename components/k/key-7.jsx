import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/oh8e_xeml.css';
import '../../css/o/o2hau-8pn.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="oh8e_xeml"/><path class="o2hau-8pn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:key-7"} {...others} />);
}

export default Component;
