import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fzxgg3dtt.css';
import '../../css/d/dy2uamv8o.css';
import '../../css/o/ofo22jbod.css';
import '../../css/r/raxzqdjnu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="fzxgg3dtt"/><path clip-rule="evenodd" class="dy2uamv8o"/><path clip-rule="evenodd" class="ofo22jbod"/><path class="raxzqdjnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:briefcase"} {...others} />);
}

export default Component;
