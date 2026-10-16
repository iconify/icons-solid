import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srmecmdfr.css';
import '../../css/d/d7nxq5b8a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="srmecmdfr"/><path class="d7nxq5b8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:air-quality-20-bold"} {...others} />);
}

export default Component;
