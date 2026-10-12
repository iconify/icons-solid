import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4xr16b6e.css';
import '../../css/r/rsmwqzs4a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q4xr16b6e"/><path class="rsmwqzs4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ferris-wheel-filled"} {...others} />);
}

export default Component;
