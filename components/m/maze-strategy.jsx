import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n47-ot0qp.css';
import '../../css/t/tvnge_b0t.css';
import '../../css/e/emix90b1a.css';
import '../../css/s/shky89sna.css';
import '../../css/q/qz10b5yrs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n47-ot0qp"/><path class="tvnge_b0t"/><path class="emix90b1a"/><path class="shky89sna"/><path class="qz10b5yrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:maze-strategy"} {...others} />);
}

export default Component;
