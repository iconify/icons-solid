import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/g/go7h00xnw.css';
import '../../css/y/y71x6_osi.css';
import '../../css/m/mqjuz14-v.css';
import '../../css/e/e0fuurbwv.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGtrHVDdHq"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="go7h00xnw"/><path class="y71x6_osi"/><path class="mqjuz14-v"/><path class="e0fuurbwv"/></g></mask></defs><circle mask="url(#SVGtrHVDdHq)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:enter-circle-filled"} {...others} />);
}

export default Component;
