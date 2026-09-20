import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/u/uk-av1yzc.css';
import '../../css/b/bnsnvbcnq.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="uk-av1yzc"/><path class="bnsnvbcnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:replicate-alt"} {...others} />);
}

export default Component;
