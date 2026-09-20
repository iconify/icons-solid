import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfcrebcov.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/om8ne5bsn.css';
import '../../css/m/ms6khdckd.css';
import '../../css/v/vp5lb0bdv.css';
import '../../css/w/w0iuu8xnc.css';

const viewBox = {"width":14,"height":14};
const content = `<defs><path id="SVG63oOqedL" class="vfcrebcov"/></defs><g class="ft5dv1b6b"><use href="#SVG63oOqedL"/><use href="#SVG63oOqedL"/><path class="om8ne5bsn"/><path class="ms6khdckd"/><path class="vp5lb0bdv"/><path class="w0iuu8xnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:new-file"} {...others} />);
}

export default Component;
