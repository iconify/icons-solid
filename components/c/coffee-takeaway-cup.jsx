import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_ifttmfg.css';
import '../../css/d/dq0sopoqg.css';
import '../../css/f/fqvivkbnm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c_ifttmfg"/><path class="dq0sopoqg"/><path class="fqvivkbnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:coffee-takeaway-cup"} {...others} />);
}

export default Component;
