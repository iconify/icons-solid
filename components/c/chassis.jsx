import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/ou_g0jpvz.css';
import '../../css/y/yjfdgwb2a.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="ou_g0jpvz"/><path class="yjfdgwb2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:chassis"} {...others} />);
}

export default Component;
