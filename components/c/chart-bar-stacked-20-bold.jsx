import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0osbpbjq.css';
import '../../css/r/reicurj-z.css';
import '../../css/a/aba8_skjp.css';
import '../../css/e/e-mc0obtp.css';
import '../../css/b/bjegt8byl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x0osbpbjq"/><path class="reicurj-z"/><path class="aba8_skjp"/><path class="e-mc0obtp"/><path class="bjegt8byl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-bar-stacked-20-bold"} {...others} />);
}

export default Component;
