import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/k/kd5wpq13q.css';
import '../../css/k/k77qyolde.css';
import '../../css/e/e1goc0bta.css';
import '../../css/f/fpqnm3b0n.css';
import '../../css/c/ccbrufbxm.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGfxajfe7T"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="kd5wpq13q"/><path class="k77qyolde"/><path class="e1goc0bta"/><path class="fpqnm3b0n"/><path class="ccbrufbxm"/></g></mask></defs><circle mask="url(#SVGfxajfe7T)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:swords-circle-filled"} {...others} />);
}

export default Component;
