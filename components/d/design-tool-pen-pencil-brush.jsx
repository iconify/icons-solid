import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nxytg9p0m.css';
import '../../css/n/nw1233orn.css';
import '../../css/k/knl7_p19e.css';
import '../../css/a/ae3zbg33n.css';
import '../../css/h/hxn_aj1ge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nxytg9p0m"/><path class="nw1233orn"/><path class="knl7_p19e"/><path class="ae3zbg33n"/><path class="hxn_aj1ge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:design-tool-pen-pencil-brush"} {...others} />);
}

export default Component;
