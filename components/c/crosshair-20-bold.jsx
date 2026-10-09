import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nain0n-0j.css';
import '../../css/z/zr6oosbmg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nain0n-0j"/><path class="zr6oosbmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crosshair-20-bold"} {...others} />);
}

export default Component;
