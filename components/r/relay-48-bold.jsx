import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4j2f0pva.css';
import '../../css/w/wegshrb7f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k4j2f0pva"/><path class="wegshrb7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:relay-48-bold"} {...others} />);
}

export default Component;
