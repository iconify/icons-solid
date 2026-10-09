import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7dkqbcdb.css';
import '../../css/e/enzpns2dp.css';
import '../../css/o/o3au9s7tu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p7dkqbcdb"/><path class="enzpns2dp"/><path class="o3au9s7tu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cabin-20"} {...others} />);
}

export default Component;
