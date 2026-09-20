import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/u/uqtnhfbgz.css';
import '../../css/g/g_1jxb44q.css';
import '../../css/o/oge-6obhz.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGv1bAUdhG"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="uqtnhfbgz"/><path class="g_1jxb44q"/><path class="oge-6obhz"/></g></mask></defs><circle mask="url(#SVGv1bAUdhG)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:arrow-right-circle-filled"} {...others} />);
}

export default Component;
