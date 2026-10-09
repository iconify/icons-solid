import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7t31nbyh.css';
import '../../css/m/ma29g-b3a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i7t31nbyh"/><path class="ma29g-b3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:alert-20-bold"} {...others} />);
}

export default Component;
