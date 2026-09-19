import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fe3jdq_kg.css';
import '../../css/h/h1diw3b2e.css';
import '../../css/n/np4yc_oid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fe3jdq_kg"/><path class="h1diw3b2e"/><path class="np4yc_oid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:insert-column-right"} {...others} />);
}

export default Component;
