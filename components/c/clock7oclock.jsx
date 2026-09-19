import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt893gged.css';
import '../../css/e/eg39dacou.css';
import '../../css/f/fd1dolbaw.css';
import '../../css/m/m9u7wsbua.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gt893gged"/><path class="eg39dacou"/><path class="fd1dolbaw"/><path class="m9u7wsbua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:clock7oclock"} {...others} />);
}

export default Component;
