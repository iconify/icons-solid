import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vz7v_lnrm.css';
import '../../css/u/u-qawnbuv.css';
import '../../css/c/cl4vunbtk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vz7v_lnrm"/><path class="u-qawnbuv"/><path class="cl4vunbtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:video-close-captioning"} {...others} />);
}

export default Component;
