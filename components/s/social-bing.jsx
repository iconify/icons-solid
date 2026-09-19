import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8e3o6bwj.css';
import '../../css/r/r0h4debhp.css';

const viewBox = {"width":100,"height":100};
const content = `<ellipse class="q8e3o6bwj"/><path class="r0h4debhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-bing"} {...others} />);
}

export default Component;
