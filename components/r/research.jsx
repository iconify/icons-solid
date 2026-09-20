import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/x9lk4hbii.css';
import '../../css/l/lhwrtz4ip.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="x9lk4hbii"/><path class="lhwrtz4ip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:research"} {...others} />);
}

export default Component;
