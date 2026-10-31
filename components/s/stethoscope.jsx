import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i50z21glt.css';
import '../../css/g/gl_4f3btr.css';
import '../../css/w/w51jg8bgx.css';
import '../../css/g/gdeacjn3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="i50z21glt wm-shadow"/><path class="gl_4f3btr wm-shadow"/><path class="w51jg8bgx"/><path class="gdeacjn3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:stethoscope"} {...others} />);
}

export default Component;
