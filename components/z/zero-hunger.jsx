import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/isbqey50u.css';
import '../../css/j/jo-xdpbzy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="isbqey50u"/><path class="jo-xdpbzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:zero-hunger"} {...others} />);
}

export default Component;
