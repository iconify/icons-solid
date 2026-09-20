import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/gqom-l4kq.css';
import '../../css/k/k_jh-8b-j.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="gqom-l4kq"/><path class="k_jh-8b-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:lighthouse"} {...others} />);
}

export default Component;
