import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii9mn0isr.css';
import '../../css/w/whuwc1eqk.css';
import '../../css/c/cmlaleo2e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ii9mn0isr"/><path class="whuwc1eqk"/><path class="cmlaleo2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offset-48"} {...others} />);
}

export default Component;
