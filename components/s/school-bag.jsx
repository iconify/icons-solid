import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/qpwwalb9j.css';
import '../../css/x/xtmgp1b9o.css';
import '../../css/x/xckmele1w.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="qpwwalb9j"/><path class="xtmgp1b9o"/><path class="xckmele1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:school-bag"} {...others} />);
}

export default Component;
