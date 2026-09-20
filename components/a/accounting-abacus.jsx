import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hhm0fxy9b.css';
import '../../css/h/hq8wytv6u.css';
import '../../css/k/ka1ds2b3g.css';
import '../../css/p/p2iik-bxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hhm0fxy9b"/><path class="hq8wytv6u"/><path class="ka1ds2b3g"/><path class="p2iik-bxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:accounting-abacus"} {...others} />);
}

export default Component;
