import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5lp0gb0r.css';
import '../../css/j/jfxg37bmd.css';
import '../../css/q/qjqsfebdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l5lp0gb0r"/><path class="jfxg37bmd"/><path class="qjqsfebdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:virtual-reality-flat"} {...others} />);
}

export default Component;
