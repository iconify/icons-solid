import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekkdwpuvf.css';
import '../../css/j/j203agb9e.css';
import '../../css/g/g440f-byn.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ekkdwpuvf"/><path clip-rule="evenodd" class="j203agb9e"/><path class="g440f-byn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:n8n-wordmark"} {...others} />);
}

export default Component;
