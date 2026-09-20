import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dcu3-vece.css';
import '../../css/m/mr50r_bjh.css';
import '../../css/f/fzmbgmbjp.css';
import '../../css/u/u_o-feb_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="dcu3-vece"/><path class="mr50r_bjh"/><path class="fzmbgmbjp"/><path class="u_o-feb_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:currency-dollar-chip"} {...others} />);
}

export default Component;
