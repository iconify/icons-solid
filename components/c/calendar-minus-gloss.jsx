import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gghi3zbmm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gghi3zbmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calendar-minus-gloss"} {...others} />);
}

export default Component;
