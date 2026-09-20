import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/klewy44hi.css';
import '../../css/w/w09apjbba.css';
import '../../css/x/x8ckvwblh.css';
import '../../css/z/z3_rjvccw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="klewy44hi"/><path class="w09apjbba"/><path class="x8ckvwblh"/><path class="z3_rjvccw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:return-square-2"} {...others} />);
}

export default Component;
