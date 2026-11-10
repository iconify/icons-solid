import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c11nhts-x.css';
import '../../css/z/zdyprpbaw.css';
import '../../css/a/abdk55fmk.css';
import '../../css/m/mr6werbrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c11nhts-x"/><path class="zdyprpbaw"/><path class="abdk55fmk"/><path class="mr6werbrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sofa"} {...others} />);
}

export default Component;
