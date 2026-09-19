import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly_b0dbrd.css';
import '../../css/j/joidnyzty.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ly_b0dbrd"/><path class="joidnyzty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:earofrice"} {...others} />);
}

export default Component;
