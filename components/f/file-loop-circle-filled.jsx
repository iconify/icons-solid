import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/q/qob048bnv.css';
import '../../css/k/kdpd-tb5o.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGnnl9YdTt"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="qob048bnv"/><path class="kdpd-tb5o"/></g></mask></defs><circle mask="url(#SVGnnl9YdTt)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:file-loop-circle-filled"} {...others} />);
}

export default Component;
