import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i_ocz4bfi.css';
import '../../css/k/kbkcdjbmr.css';
import '../../css/v/v2jut0b8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path clip-rule="evenodd" class="i_ocz4bfi"/><path clip-rule="evenodd" class="kbkcdjbmr"/><path class="v2jut0b8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:atom-02"} {...others} />);
}

export default Component;
