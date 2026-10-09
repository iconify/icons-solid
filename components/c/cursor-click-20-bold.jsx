import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsi3rkp0j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nsi3rkp0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cursor-click-20-bold"} {...others} />);
}

export default Component;
