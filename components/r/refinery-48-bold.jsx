import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eojz8nbhf.css';
import '../../css/l/lalcw8bzw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eojz8nbhf"/><path class="lalcw8bzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refinery-48-bold"} {...others} />);
}

export default Component;
