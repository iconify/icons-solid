import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5780hbgv.css';
import '../../css/l/l21aj4bcj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="i5780hbgv"/><path clip-rule="evenodd" class="l21aj4bcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:polka-dot-circle-flat"} {...others} />);
}

export default Component;
