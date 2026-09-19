import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q58kriblw.css';
import '../../css/t/tc02e-b4g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q58kriblw"/><path class="tc02e-b4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:soccerball"} {...others} />);
}

export default Component;
