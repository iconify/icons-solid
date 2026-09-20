import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/v/vgdcgkyfc.css';
import '../../css/s/siyomryii.css';
import '../../css/h/hyykw3z9z.css';
import '../../css/b/bsx6inblt.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGaJQvvbYf"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="vgdcgkyfc"/><path class="siyomryii"/><path class="hyykw3z9z"/><path class="bsx6inblt"/></g></mask></defs><circle mask="url(#SVGaJQvvbYf)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:sliders-circle-filled"} {...others} />);
}

export default Component;
