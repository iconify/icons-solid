import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufe16c4_h.css';
import '../../css/c/cnog61bgz.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ufe16c4_h"/><path class="cnog61bgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:dialogflow"} {...others} />);
}

export default Component;
