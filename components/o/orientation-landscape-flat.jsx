import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hp4bw2m4h.css';
import '../../css/o/oluu7_b5d.css';
import '../../css/k/k04i15bug.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hp4bw2m4h"/><path class="oluu7_b5d"/><path clip-rule="evenodd" class="k04i15bug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:orientation-landscape-flat"} {...others} />);
}

export default Component;
