import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mub80wbyn.css';
import '../../css/m/m9xfn8b9l.css';
import '../../css/s/s2ngt8bjc.css';
import '../../css/e/e10qxlbqz.css';
import '../../css/p/psi0xg9dj.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="mub80wbyn"/><path class="m9xfn8b9l"/><path class="s2ngt8bjc"/><path class="e10qxlbqz"/><path class="psi0xg9dj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:credit-card-dollar"} {...others} />);
}

export default Component;
