import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i4bbelqdd.css';
import '../../css/u/udsce1b5r.css';
import '../../css/n/nqop7gbey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="i4bbelqdd"/><path class="udsce1b5r"/><path class="nqop7gbey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevron-last-broken"} {...others} />);
}

export default Component;
