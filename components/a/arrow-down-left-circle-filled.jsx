import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/z/z93oqzhwa.css';
import '../../css/q/qra9urbgq.css';
import '../../css/a/am6c66wmk.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVG1Ebc0dyn"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="z93oqzhwa"/><path class="qra9urbgq"/><path class="am6c66wmk"/></g></mask></defs><circle mask="url(#SVG1Ebc0dyn)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:arrow-down-left-circle-filled"} {...others} />);
}

export default Component;
