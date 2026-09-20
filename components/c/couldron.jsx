import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/azvap9d7m.css';
import '../../css/l/l9q28cc9j.css';
import '../../css/a/ah8f13bnz.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="azvap9d7m"/><path class="l9q28cc9j"/><path class="ah8f13bnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:couldron"} {...others} />);
}

export default Component;
