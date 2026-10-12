import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q43pkpbfy.css';
import '../../css/o/ox26w0hfk.css';
import '../../css/w/wpslppbzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q43pkpbfy"/><path class="ox26w0hfk"/><path class="wpslppbzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:utensils-crossed-duotone"} {...others} />);
}

export default Component;
