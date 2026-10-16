import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7qbyuxuw.css';
import '../../css/e/eolgfe9_w.css';
import '../../css/n/nqz5vbbsk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n7qbyuxuw"/><path class="eolgfe9_w"/><path class="nqz5vbbsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:strategy-20-bold"} {...others} />);
}

export default Component;
