import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/a/aapx_rtjc.css';
import '../../css/n/nv8c4nb5x.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGN3k3edTs"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="aapx_rtjc"/><path class="nv8c4nb5x"/></g></mask></defs><circle mask="url(#SVGN3k3edTs)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:leaf-circle-filled"} {...others} />);
}

export default Component;
