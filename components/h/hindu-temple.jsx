import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oo_em9bte.css';
import '../../css/r/rjdultb1q.css';
import '../../css/g/gq1d5i3gs.css';
import '../../css/p/pqbpe7c4i.css';
import '../../css/w/wawl49h7c.css';
import '../../css/y/yhqa8v18y.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="oo_em9bte"/><path clip-rule="evenodd" class="rjdultb1q"/><path class="gq1d5i3gs"/><path clip-rule="evenodd" class="pqbpe7c4i"/><path clip-rule="evenodd" class="wawl49h7c"/><path class="yhqa8v18y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hindu-temple"} {...others} />);
}

export default Component;
