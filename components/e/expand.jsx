import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ye0iz3b5r.css';
import '../../css/n/nmtpwvozm.css';
import '../../css/j/julsx1adr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ye0iz3b5r"/><path class="nmtpwvozm"/><path class="julsx1adr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:expand"} {...others} />);
}

export default Component;
