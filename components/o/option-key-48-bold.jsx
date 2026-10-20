import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0s85yyfm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i0s85yyfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:option-key-48-bold"} {...others} />);
}

export default Component;
