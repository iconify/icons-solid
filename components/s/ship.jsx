import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cpspcpjsa.css';
import '../../css/c/csufotbpy.css';
import '../../css/j/ju-cazbvc.css';
import '../../css/q/qt2plpg1d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cpspcpjsa"/><path clip-rule="evenodd" class="csufotbpy"/><path clip-rule="evenodd" class="ju-cazbvc"/><path class="qt2plpg1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:ship"} {...others} />);
}

export default Component;
