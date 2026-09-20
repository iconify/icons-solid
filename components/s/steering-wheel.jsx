import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvsvpldwj.css';
import '../../css/j/j-ysd_kuz.css';
import '../../css/y/y295kubtu.css';
import '../../css/p/p-9ygcbtu.css';
import '../../css/d/dsktp0eyt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dvsvpldwj"/><path class="j-ysd_kuz"/><path class="y295kubtu"/><path class="p-9ygcbtu"/><path class="dsktp0eyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:steering-wheel"} {...others} />);
}

export default Component;
