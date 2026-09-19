import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ail2dgb3l.css';
import '../../css/j/jgf7k_b4d.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ail2dgb3l"/><path class="jgf7k_b4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:maya-wordmark"} {...others} />);
}

export default Component;
