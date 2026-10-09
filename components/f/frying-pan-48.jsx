import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajtnjnklx.css';
import '../../css/s/sb9rsi1bu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ajtnjnklx"/><path class="sb9rsi1bu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frying-pan-48"} {...others} />);
}

export default Component;
