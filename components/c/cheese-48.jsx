import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aaxcsz8rc.css';
import '../../css/r/rzy0o9f7l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="aaxcsz8rc"/><path class="rzy0o9f7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cheese-48"} {...others} />);
}

export default Component;
