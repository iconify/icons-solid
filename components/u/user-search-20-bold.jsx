import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nehc85b4d.css';
import '../../css/g/gjporh8py.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nehc85b4d"/><path class="gjporh8py"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-search-20-bold"} {...others} />);
}

export default Component;
