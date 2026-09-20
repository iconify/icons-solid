import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/i/iv72-jbje.css';
import '../../css/g/gkcec9d0c.css';
import '../../css/k/k_xjaedzr.css';
import '../../css/j/jrthnwb6l.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGODKmXcFQ"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="iv72-jbje"/><path class="gkcec9d0c"/><path class="k_xjaedzr"/><path class="jrthnwb6l"/></g></mask></defs><circle mask="url(#SVGODKmXcFQ)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:seedling-circle-filled"} {...others} />);
}

export default Component;
