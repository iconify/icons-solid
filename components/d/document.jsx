import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akt89zb7w.css';
import '../../css/j/jleau3b8h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="akt89zb7w"/><path class="jleau3b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:document"} {...others} />);
}

export default Component;
