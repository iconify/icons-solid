import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/h87zxj8uq.css';
import '../../css/b/b250h9bbp.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="h87zxj8uq"/><path class="b250h9bbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:cableway-2"} {...others} />);
}

export default Component;
