import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-zsa5bjg.css';
import '../../css/j/j0-b_gamb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c-zsa5bjg"/><path class="j0-b_gamb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:document-attach-sharp"} {...others} />);
}

export default Component;
