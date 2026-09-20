import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ukuc7qb5n.css';
import '../../css/f/ftcwonqjb.css';
import '../../css/r/r37nhz6_h.css';
import '../../css/y/ys1ggcoki.css';
import '../../css/u/uy8u3ybxe.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g clip-rule="evenodd" class="d2kvgvbvc"><path class="ukuc7qb5n"/><path class="ftcwonqjb"/><path class="r37nhz6_h"/><path class="ys1ggcoki"/><path class="uy8u3ybxe"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:repeat-circle-filled"} {...others} />);
}

export default Component;
