import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nors1t8an.css';
import '../../css/m/mr67hub_l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nors1t8an"/><path class="mr67hub_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydro-plant-20-bold"} {...others} />);
}

export default Component;
