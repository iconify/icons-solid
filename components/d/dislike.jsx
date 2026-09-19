import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djaom8a_q.css';
import '../../css/u/u8d4vrbql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="djaom8a_q"/><path class="u8d4vrbql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:dislike"} {...others} />);
}

export default Component;
