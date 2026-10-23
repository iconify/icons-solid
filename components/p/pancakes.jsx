import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jaaxic8jr.css';
import '../../css/r/rdhp2iwdg.css';
import '../../css/v/v0h4ytx0h.css';
import '../../css/y/yazri2bjm.css';
import '../../css/b/bo8gi13ed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jaaxic8jr"/><path class="rdhp2iwdg"/><path class="v0h4ytx0h"/><path class="yazri2bjm"/><path class="bo8gi13ed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pancakes"} {...others} />);
}

export default Component;
