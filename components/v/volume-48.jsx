import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9bzs8odx.css';
import '../../css/i/ijrn25w1m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r9bzs8odx"/><path class="ijrn25w1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:volume-48"} {...others} />);
}

export default Component;
