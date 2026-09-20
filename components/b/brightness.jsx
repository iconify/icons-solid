import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/gu9a_bbyd.css';
import '../../css/l/l9zbhrbcf.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="gu9a_bbyd"/><path class="l9zbhrbcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:brightness"} {...others} />);
}

export default Component;
