import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/todks38qn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="todks38qn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:moon-line"} {...others} />);
}

export default Component;
