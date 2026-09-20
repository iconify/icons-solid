import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/d/dd8bl5bbm.css';
import '../../css/z/z7psoab5m.css';
import '../../css/e/e4aw4xbir.css';
import '../../css/f/fmg0zibqy.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="dd8bl5bbm"/><path clip-rule="evenodd" class="z7psoab5m"/></g><path clip-rule="evenodd" class="e4aw4xbir"/><path clip-rule="evenodd" class="fmg0zibqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:floppy-disk"} {...others} />);
}

export default Component;
