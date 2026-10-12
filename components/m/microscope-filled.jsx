import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fl_5w4b-x.css';
import '../../css/d/dr823obko.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fl_5w4b-x"/><path class="dr823obko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:microscope-filled"} {...others} />);
}

export default Component;
