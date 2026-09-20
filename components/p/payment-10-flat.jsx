import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w1jbcn64x.css';
import '../../css/b/b8m795bow.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="w1jbcn64x"/><path clip-rule="evenodd" class="b8m795bow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:payment-10-flat"} {...others} />);
}

export default Component;
