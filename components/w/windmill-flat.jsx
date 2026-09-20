import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g77aunb1c.css';
import '../../css/p/pjb13lo3b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="g77aunb1c"/><path clip-rule="evenodd" class="pjb13lo3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:windmill-flat"} {...others} />);
}

export default Component;
