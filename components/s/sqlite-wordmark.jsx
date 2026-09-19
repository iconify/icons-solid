import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/by4kbj5ev.css';
import '../../css/h/hhg6y4bgf.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="by4kbj5ev"/><path class="hhg6y4bgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:sqlite-wordmark"} {...others} />);
}

export default Component;
