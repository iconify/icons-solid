import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjxey5bjp.css';
import '../../css/h/hgf0v-b3k.css';
import '../../css/c/cm-f3t2vn.css';
import '../../css/d/dyuvwzb9u.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="vjxey5bjp"/><circle class="hgf0v-b3k"/><path class="cm-f3t2vn"/><path class="dyuvwzb9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:pytorch-wordmark"} {...others} />);
}

export default Component;
