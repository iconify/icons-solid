import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj_q1lb9k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nj_q1lb9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:exclaimationquestionmark"} {...others} />);
}

export default Component;
