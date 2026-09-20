import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/p/pizmzxbaf.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfodgrb7a.css';
import '../../css/q/q4eyy3buu.css';
import '../../css/x/x881p7cot.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGEkI4wtfN" class="n1mjunbsu"><path class="pizmzxbaf"/></mask><g class="ft5dv1b6b"><path class="jfodgrb7a"/><path mask="url(#SVGEkI4wtfN)" class="q4eyy3buu"/><path class="x881p7cot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:drink"} {...others} />);
}

export default Component;
