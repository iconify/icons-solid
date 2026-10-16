import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u95e4sw8e.css';
import '../../css/f/f7w-71w7o.css';
import '../../css/v/vix52acse.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u95e4sw8e"/><path class="f7w-71w7o"/><path class="vix52acse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-x-48-bold"} {...others} />);
}

export default Component;
