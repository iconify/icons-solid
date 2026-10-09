import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bu9o71bva.css';
import '../../css/r/rudk7ubrf.css';
import '../../css/u/u2axsqyum.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bu9o71bva"/><path class="rudk7ubrf"/><path class="u2axsqyum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blade-transport-48-bold"} {...others} />);
}

export default Component;
