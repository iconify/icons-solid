import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itlombx0k.css';
import '../../css/c/cbxvuvbvw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="itlombx0k"/><path class="cbxvuvbvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-sankey-20"} {...others} />);
}

export default Component;
