import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrvjxe57d.css';
import '../../css/u/uh0ujnbdw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jrvjxe57d"/><path class="uh0ujnbdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-ring-20"} {...others} />);
}

export default Component;
