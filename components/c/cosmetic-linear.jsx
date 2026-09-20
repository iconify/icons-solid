import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ngrd8yb3c.css';
import '../../css/d/d4vocib6k.css';
import '../../css/p/pmf__vb6m.css';
import '../../css/w/wj1odio5f.css';
import '../../css/z/z37iwiaad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ngrd8yb3c"/><path class="d4vocib6k"/><path class="pmf__vb6m"/><path class="wj1odio5f"/><path class="z37iwiaad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cosmetic-linear"} {...others} />);
}

export default Component;
