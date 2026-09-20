import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/d/dzoci1sow.css';
import '../../css/i/ihpqbh3gg.css';
import '../../css/f/fmjfe4b-j.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGnSbL0bcr"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="dzoci1sow"/><path class="ihpqbh3gg"/><path class="fmjfe4b-j"/></g></mask></defs><circle mask="url(#SVGnSbL0bcr)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:next-track-circle-filled"} {...others} />);
}

export default Component;
