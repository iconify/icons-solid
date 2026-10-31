import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7vmrehhn.css';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tyr3m5buh.css';
import '../../css/k/kv8qfu68r.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/q/qadc00bqw.css';
import '../../css/c/ch6_doo9l.css';

const viewBox = {"width":301,"height":201};
const content = `<defs><path id="SVGkcWd1cFQ" class="r7vmrehhn"/></defs><g class="bi12bsetm"><path class="tyr3m5buh"/><path class="kv8qfu68r"/><mask id="SVGh85JgdhO" class="n1mjunbsu"><use href="#SVGkcWd1cFQ"/></mask><path mask="url(#SVGh85JgdhO)" class="qadc00bqw"/><path mask="url(#SVGh85JgdhO)" class="ch6_doo9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:tz"} {...others} />);
}

export default Component;
