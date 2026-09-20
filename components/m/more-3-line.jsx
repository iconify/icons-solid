import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3lttot3l.css';
import '../../css/m/mf2faab1e.css';
import '../../css/i/igmy_9b_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r3lttot3l"/><path class="mf2faab1e"/><path class="igmy_9b_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:more-3-line"} {...others} />);
}

export default Component;
