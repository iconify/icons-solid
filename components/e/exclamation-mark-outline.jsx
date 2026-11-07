import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgns90b-d.css';
import '../../css/e/ekudvch8j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mgns90b-d"/><path class="ekudvch8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:exclamation-mark-outline"} {...others} />);
}

export default Component;
