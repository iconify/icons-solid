import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkx8at11b.css';
import '../../css/w/wsq0amysy.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jkx8at11b"/><path class="wsq0amysy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:monogame-wordmark"} {...others} />);
}

export default Component;
