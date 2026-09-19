import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/enti7lbrg.css';
import '../../css/z/z-6bcd3te.css';
import '../../css/e/equmkibvp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="enti7lbrg"/><path class="z-6bcd3te"/><path clip-rule="evenodd" class="equmkibvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-raising-hand"} {...others} />);
}

export default Component;
