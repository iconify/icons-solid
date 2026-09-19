import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pk-u7ac7z.css';
import '../../css/h/h3iug1uno.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pk-u7ac7z"/><path class="h3iug1uno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:lodash"} {...others} />);
}

export default Component;
