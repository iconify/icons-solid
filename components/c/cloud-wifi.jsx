import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_34ssbuz.css';
import '../../css/y/yakuse8di.css';
import '../../css/k/k_35l1wky.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="u_34ssbuz"/><path class="yakuse8di"/><path class="k_35l1wky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cloud-wifi"} {...others} />);
}

export default Component;
