import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/sxnb1nwze.css';
import '../../css/h/h6cqb4bhd.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="sxnb1nwze"/><path class="h6cqb4bhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:cabinet"} {...others} />);
}

export default Component;
