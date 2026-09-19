import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8khk_4lc.css';

const viewBox = {"width":506,"height":512};
const content = `<path class="f8khk_4lc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:silicongraphics"} {...others} />);
}

export default Component;
