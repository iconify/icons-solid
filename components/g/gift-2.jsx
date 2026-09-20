import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z18h9ny6x.css';
import '../../css/w/wq3kycbks.css';
import '../../css/d/dr6zkgbnj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="z18h9ny6x"/><path class="wq3kycbks"/><path class="dr6zkgbnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:gift-2"} {...others} />);
}

export default Component;
