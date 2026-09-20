import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkyy27shr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kkyy27shr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:mushroom-outline"} {...others} />);
}

export default Component;
