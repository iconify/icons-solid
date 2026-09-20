import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o2an8tabl.css';
import '../../css/k/kbsq4-bjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="o2an8tabl"/><path class="kbsq4-bjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:cupcake"} {...others} />);
}

export default Component;
