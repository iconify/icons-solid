import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/jh8eogz1k.css';
import '../../css/i/i_ldr-ufh.css';
import '../../css/i/isua9uh5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="jh8eogz1k"/><path class="i_ldr-ufh"/><path class="isua9uh5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:xi-capital"} {...others} />);
}

export default Component;
