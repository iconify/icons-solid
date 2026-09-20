import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9ev1ybyr.css';
import '../../css/q/qwm5tjbfu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s9ev1ybyr"/><path class="qwm5tjbfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:upp"} {...others} />);
}

export default Component;
