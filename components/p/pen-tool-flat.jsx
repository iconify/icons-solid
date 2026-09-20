import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g31632blg.css';
import '../../css/u/ueh8plgdi.css';
import '../../css/j/j878cxbgo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="g31632blg"/><path clip-rule="evenodd" class="ueh8plgdi"/><path class="j878cxbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pen-tool-flat"} {...others} />);
}

export default Component;
