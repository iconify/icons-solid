import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x579hjb9j.css';
import '../../css/a/ad8vvnbjm.css';
import '../../css/j/j1dztmbls.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="x579hjb9j"/><path class="ad8vvnbjm"/><path class="j1dztmbls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:postman-wordmark"} {...others} />);
}

export default Component;
