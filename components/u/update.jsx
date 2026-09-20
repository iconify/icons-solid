import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/d95iowbey.css';
import '../../css/e/eln8y-b9f.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="d95iowbey"/><path class="eln8y-b9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:update"} {...others} />);
}

export default Component;
