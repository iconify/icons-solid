import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/k/kzhjb5qxl.css';
import '../../css/w/w4-g1zb2h.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGA2StddmM"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="kzhjb5qxl"/><path class="w4-g1zb2h"/></g></mask></defs><circle mask="url(#SVGA2StddmM)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:pinpoint-circle-filled"} {...others} />);
}

export default Component;
