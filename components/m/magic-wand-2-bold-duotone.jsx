import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxk_x0b5m.css';
import '../../css/o/o1oqmebja.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nxk_x0b5m"/><path class="o1oqmebja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magic-wand-2-bold-duotone"} {...others} />);
}

export default Component;
