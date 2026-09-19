import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7vmrehhn.css';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j877x6btk.css';
import '../../css/d/dmugsu19u.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/d/drg-3lrre.css';
import '../../css/c/ch6_doo9l.css';

const viewBox = {"width":301,"height":201};
const content = `<defs><path id="SVGkM6JsbQL" class="r7vmrehhn"/></defs><g class="bi12bsetm"><path class="j877x6btk"/><path class="dmugsu19u"/><mask id="SVGrZesHcAu" class="n1mjunbsu"><use href="#SVGkM6JsbQL"/></mask><path mask="url(#SVGrZesHcAu)" class="drg-3lrre"/><path mask="url(#SVGrZesHcAu)" class="ch6_doo9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:tz"} {...others} />);
}

export default Component;
