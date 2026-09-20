import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rb7_vlbxu.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="rb7_vlbxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:fullscreen"} {...others} />);
}

export default Component;
