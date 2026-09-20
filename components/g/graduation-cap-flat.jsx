import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jsa3ybb1d.css';
import '../../css/x/x08156b4k.css';
import '../../css/l/lxp1ug-mc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jsa3ybb1d"/><path clip-rule="evenodd" class="x08156b4k"/><path class="lxp1ug-mc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:graduation-cap-flat"} {...others} />);
}

export default Component;
