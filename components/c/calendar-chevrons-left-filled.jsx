import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6a5x9bff.css';
import '../../css/c/cwtdbgb_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j6a5x9bff"/><path class="cwtdbgb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-chevrons-left-filled"} {...others} />);
}

export default Component;
