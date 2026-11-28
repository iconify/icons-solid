import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x3d4jpbsy.css';
import '../../css/o/ow_tki-5e.css';
import '../../css/j/j9_b_joat.css';
import '../../css/o/oxyxx6b4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="x3d4jpbsy"/><path class="ow_tki-5e"/><path class="j9_b_joat"/><path class="oxyxx6b4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bench"} {...others} />);
}

export default Component;
