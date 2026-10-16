import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayrqo3blg.css';
import '../../css/g/gb1sjyb5o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ayrqo3blg"/><path class="gb1sjyb5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:letter-case-48"} {...others} />);
}

export default Component;
