import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fefq9gogj.css';
import '../../css/j/jdcfrlbmv.css';
import '../../css/f/fd_yk0d-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fefq9gogj"/><path clip-rule="evenodd" class="jdcfrlbmv"/><path class="fd_yk0d-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:landscape-2-flat"} {...others} />);
}

export default Component;
