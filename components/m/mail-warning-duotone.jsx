import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tovaefsnx.css';
import '../../css/s/sigei6ulc.css';
import '../../css/c/cbermm3cj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tovaefsnx"/><path class="sigei6ulc"/><path class="cbermm3cj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mail-warning-duotone"} {...others} />);
}

export default Component;
