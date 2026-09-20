import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1fsbgbhg.css';
import '../../css/a/aned6khuj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i1fsbgbhg"/><path class="aned6khuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:calendar-times"} {...others} />);
}

export default Component;
