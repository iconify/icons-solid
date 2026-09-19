import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhlfeibkt.css';
import '../../css/h/hdz29maug.css';
import '../../css/f/f6irx0b1a.css';
import '../../css/g/geztdhi9y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="fhlfeibkt"/><path class="hdz29maug"/><path class="f6irx0b1a"/><path class="geztdhi9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:eye-duo"} {...others} />);
}

export default Component;
