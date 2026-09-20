import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e03d1ubcp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e03d1ubcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:horizontal-align-left"} {...others} />);
}

export default Component;
