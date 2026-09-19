import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_7bs7byi.css';
import '../../css/f/fugjbo8hn.css';
import '../../css/m/m36n2g68y.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="w_7bs7byi"/><path class="fugjbo8hn"/><path clip-rule="evenodd" class="m36n2g68y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-curly-hair"} {...others} />);
}

export default Component;
