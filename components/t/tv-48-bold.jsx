import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sw937uq7x.css';
import '../../css/h/h8hd6s8wt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sw937uq7x"/><path class="h8hd6s8wt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tv-48-bold"} {...others} />);
}

export default Component;
