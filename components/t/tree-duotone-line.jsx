import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f3-fy_b1a.css';
import '../../css/g/gx01nyb5v.css';
import '../../css/x/x40z3o-2g.css';
import '../../css/a/ap7du0b9t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f3-fy_b1a"/><path clip-rule="evenodd" class="gx01nyb5v"/><path class="x40z3o-2g"/><path class="ap7du0b9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:tree-duotone-line"} {...others} />);
}

export default Component;
