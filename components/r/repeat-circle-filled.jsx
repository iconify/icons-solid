import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/u/ukuc7qb5n.css';
import '../../css/f/ftcwonqjb.css';
import '../../css/r/r37nhz6_h.css';
import '../../css/y/ys1ggcoki.css';
import '../../css/u/uy8u3ybxe.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGv2N3Hd5g"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="ukuc7qb5n"/><path class="ftcwonqjb"/><path class="r37nhz6_h"/><path class="ys1ggcoki"/><path class="uy8u3ybxe"/></g></mask></defs><circle mask="url(#SVGv2N3Hd5g)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:repeat-circle-filled"} {...others} />);
}

export default Component;
