import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqdkyobsr.css';
import '../../css/p/pw-txxw1n.css';
import '../../css/s/su-rh8qhu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jqdkyobsr"/><path class="pw-txxw1n"/><path class="su-rh8qhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:assembly-line-48"} {...others} />);
}

export default Component;
