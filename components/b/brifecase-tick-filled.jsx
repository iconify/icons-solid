import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/da33mmksw.css';
import '../../css/q/qqzuq1b-l.css';
import '../../css/o/o4qapjxgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="da33mmksw"/><path class="qqzuq1b-l"/><path class="o4qapjxgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:brifecase-tick-filled"} {...others} />);
}

export default Component;
