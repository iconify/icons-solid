import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9xbm4b4t.css';
import '../../css/d/d2jd96bqi.css';
import '../../css/h/hl6q5lmem.css';
import '../../css/u/uj00c0b-s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="a9xbm4b4t"/><path class="d2jd96bqi"/><path class="hl6q5lmem"/><path class="uj00c0b-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:health-care-2"} {...others} />);
}

export default Component;
