import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4r0n-daa.css';
import '../../css/d/dzy_-taoh.css';
import '../../css/k/ktd6x_fpp.css';
import '../../css/x/x-e56pbdi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c4r0n-daa"/><path class="dzy_-taoh"/><path class="ktd6x_fpp"/><path class="x-e56pbdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mosque-20-bold"} {...others} />);
}

export default Component;
