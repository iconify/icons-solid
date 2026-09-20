import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_ghebcwv.css';
import '../../css/f/f7hsq-06y.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="p_ghebcwv"/><path clip-rule="evenodd" class="f7hsq-06y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:skull-solid"} {...others} />);
}

export default Component;
