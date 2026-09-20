import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/q1n9h3uve.css';
import '../../css/d/d7wp7yb4y.css';
import '../../css/s/smgbl8cgg.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="q1n9h3uve"/><path class="d7wp7yb4y"/><path class="smgbl8cgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:chart-column-low"} {...others} />);
}

export default Component;
