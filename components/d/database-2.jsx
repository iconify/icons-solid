import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/pjhi7gbuq.css';
import '../../css/f/ft9--ubvs.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="pjhi7gbuq"/><path class="ft9--ubvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:database-2"} {...others} />);
}

export default Component;
