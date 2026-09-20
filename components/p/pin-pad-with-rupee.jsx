import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfh4p2bfx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lfh4p2bfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pin-pad-with-rupee"} {...others} />);
}

export default Component;
