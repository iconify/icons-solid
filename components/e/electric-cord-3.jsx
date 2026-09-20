import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hlz4ghbzm.css';
import '../../css/o/owx1-kbkf.css';
import '../../css/m/mbu6rsbxe.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hlz4ghbzm"/><path class="owx1-kbkf"/><path class="mbu6rsbxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:electric-cord-3"} {...others} />);
}

export default Component;
