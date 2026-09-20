import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggb2lsbur.css';
import '../../css/u/u9max4fwq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ggb2lsbur"/><path clip-rule="evenodd" class="u9max4fwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:airplane-disabled-flat"} {...others} />);
}

export default Component;
