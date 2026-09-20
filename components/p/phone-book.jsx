import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mxol6lbrs.css';
import '../../css/b/bhqzib66w.css';
import '../../css/n/nsij66bfw.css';
import '../../css/a/a8bh2w70l.css';
import '../../css/d/drhn-r_yg.css';
import '../../css/n/no5kxcbkl.css';
import '../../css/f/f2hymkeod.css';
import '../../css/c/ciw3vghzz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="mxol6lbrs"/><path class="bhqzib66w"/><path class="nsij66bfw"/><path class="a8bh2w70l"/><path class="drhn-r_yg"/><path class="no5kxcbkl"/><path class="f2hymkeod"/><path class="ciw3vghzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:phone-book"} {...others} />);
}

export default Component;
