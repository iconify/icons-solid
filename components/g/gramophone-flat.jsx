import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifl1_psnc.css';
import '../../css/f/flc3zygrb.css';
import '../../css/d/dzc85-47c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ifl1_psnc"/><path class="flc3zygrb"/><path class="dzc85-47c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:gramophone-flat"} {...others} />);
}

export default Component;
