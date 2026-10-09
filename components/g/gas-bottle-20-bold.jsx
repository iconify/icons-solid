import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrwndsbwa.css';
import '../../css/e/ea6-embbf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wrwndsbwa"/><path class="ea6-embbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-bottle-20-bold"} {...others} />);
}

export default Component;
