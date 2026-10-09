import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir6r4qmdm.css';
import '../../css/l/lfvfo_aeu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ir6r4qmdm"/><path class="lfvfo_aeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wardrobe-48-bold"} {...others} />);
}

export default Component;
