import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ot0mghbfc.css';
import '../../css/j/jwxwoobeu.css';
import '../../css/e/etrl1rckl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ot0mghbfc"/><path class="jwxwoobeu"/><path class="etrl1rckl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:circular-saw-20-bold"} {...others} />);
}

export default Component;
