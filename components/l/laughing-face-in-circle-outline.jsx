import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayo-8cbjs.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ayo-8cbjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:laughing-face-in-circle-outline"} {...others} />);
}

export default Component;
