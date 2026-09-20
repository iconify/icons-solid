import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/eoy38-b2r.css';
import '../../css/u/urp-s4t3i.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="eoy38-b2r"/><path class="urp-s4t3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:left-direction"} {...others} />);
}

export default Component;
