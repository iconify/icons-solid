import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhbboj22q.css';
import '../../css/a/a8ccsebhs.css';
import '../../css/m/mivqt5bxo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xhbboj22q"/><path class="a8ccsebhs"/><path class="mivqt5bxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lamp-20-bold"} {...others} />);
}

export default Component;
