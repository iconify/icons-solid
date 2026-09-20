import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fdka27b0c.css';
import '../../css/s/sw--0cc3b.css';
import '../../css/i/iecti-bfl.css';
import '../../css/z/z1snilbue.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="fdka27b0c"/><path class="sw--0cc3b"/><path class="iecti-bfl"/><path class="z1snilbue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:carrot"} {...others} />);
}

export default Component;
