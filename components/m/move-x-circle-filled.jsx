import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/d/dy-awy0ir.css';
import '../../css/g/g_s77ruob.css';
import '../../css/w/w2ifseclb.css';
import '../../css/y/yg9621rfx.css';
import '../../css/e/e44mx_b3e.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGKa4mreFa"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="dy-awy0ir"/><path class="g_s77ruob"/><path class="w2ifseclb"/><path class="yg9621rfx"/><path class="e44mx_b3e"/></g></mask></defs><circle mask="url(#SVGKa4mreFa)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:move-x-circle-filled"} {...others} />);
}

export default Component;
