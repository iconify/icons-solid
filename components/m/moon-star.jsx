import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otjtzebzu.css';
import '../../css/t/t34qm9s-c.css';
import '../../css/o/og8cnbkna.css';
import '../../css/k/kqroz7kov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="otjtzebzu"/><path class="t34qm9s-c"/><path class="og8cnbkna"/><path class="kqroz7kov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:moon-star"} {...others} />);
}

export default Component;
