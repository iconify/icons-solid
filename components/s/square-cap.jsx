import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5n6dabyb.css';
import '../../css/w/wv_3q3bfi.css';
import '../../css/p/pkkf7j39n.css';
import '../../css/e/eo8kfbbjo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n5n6dabyb"/><path class="wv_3q3bfi"/><path class="pkkf7j39n"/><path class="eo8kfbbjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:square-cap"} {...others} />);
}

export default Component;
