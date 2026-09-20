import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxd78lb7m.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="sxd78lb7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:moon-alt-waning-crescent-1"} {...others} />);
}

export default Component;
