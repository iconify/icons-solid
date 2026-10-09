import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1xalrahn.css';
import '../../css/r/rb010diqx.css';
import '../../css/i/ijqqz3eok.css';
import '../../css/l/lo883k-9c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f1xalrahn"/><path class="rb010diqx"/><path class="ijqqz3eok"/><path class="lo883k-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:concentrated-solar-48-bold"} {...others} />);
}

export default Component;
