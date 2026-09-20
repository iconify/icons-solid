import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h0_ci5b7p.css';
import '../../css/p/plvnt2zxv.css';
import '../../css/v/v1au1ubhk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="h0_ci5b7p"/><path class="plvnt2zxv"/><path class="v1au1ubhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:beanie"} {...others} />);
}

export default Component;
