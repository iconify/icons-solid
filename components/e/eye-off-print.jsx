import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dru9-5oma.css';
import '../../css/f/fr5kl9bxl.css';
import '../../css/p/pinqdebty.css';
import '../../css/b/b6i3s7bvv.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dru9-5oma"/><path clip-rule="evenodd" class="fr5kl9bxl"/><path class="pinqdebty"/><path class="b6i3s7bvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:eye-off-print"} {...others} />);
}

export default Component;
