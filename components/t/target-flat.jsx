import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nygvwglbr.css';
import '../../css/n/nu991oelf.css';
import '../../css/t/t-ialtlgv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="nygvwglbr"/><path clip-rule="evenodd" class="nu991oelf"/><path clip-rule="evenodd" class="t-ialtlgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:target-flat"} {...others} />);
}

export default Component;
