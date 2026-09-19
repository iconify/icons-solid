import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jh5366bnn.css';
import '../../css/t/tz4ef46-b.css';
import '../../css/t/to1k2cb9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="calendar-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="jh5366bnn"/><path clip-rule="evenodd" class="tz4ef46-b"/><path class="to1k2cb9y"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:calendar-outline"} {...others} />);
}

export default Component;
