import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8x3qxbvw.css';
import '../../css/a/ay-y4bf7s.css';
import '../../css/d/d4pnxhbqs.css';
import '../../css/f/fin17rrbl.css';
import '../../css/q/qvx8aibxe.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="e8x3qxbvw"/><path class="ay-y4bf7s"/><path clip-rule="evenodd" class="d4pnxhbqs"/><path class="fin17rrbl"/><path class="qvx8aibxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:projector"} {...others} />);
}

export default Component;
