import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnkbqol6e.css';
import '../../css/q/quo_cqime.css';
import '../../css/l/l-2g-1dte.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rnkbqol6e"/><path class="quo_cqime"/><path class="l-2g-1dte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-desktop-help-device-help-information-display-computer-desktop-question-info"} {...others} />);
}

export default Component;
