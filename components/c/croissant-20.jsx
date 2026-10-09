import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdfc7kbln.css';
import '../../css/p/plyl_b4bn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gdfc7kbln"/><path class="plyl_b4bn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:croissant-20"} {...others} />);
}

export default Component;
